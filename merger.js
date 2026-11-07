"use strict";

function mergeUrls(rawUrls, t){
      if(rawUrls.length===0) throw new Error(t("errEmpty"));
      const parsed=rawUrls.map((raw,index)=>{
        let url; try{url=new URL(raw);}catch{throw new Error(t("errInvalid",{n:index+1,url:raw}));}
        if(url.protocol!=="http:"&&url.protocol!=="https:") throw new Error(t("errProtocol",{n:index+1}));
        if(url.username||url.password) throw new Error(t("errCredentials",{n:index+1}));
        return url;
      });
      const base=parsed[0], sameResource=url=>url.origin===base.origin&&url.pathname===base.pathname&&url.hash===base.hash;
      const mismatchIndex=parsed.findIndex(url=>!sameResource(url));
      if(mismatchIndex!==-1) throw new Error(t("errMismatch",{n:mismatchIndex+1}));
      const groups=new Map();
      parsed.forEach((url,urlIndex)=>{for(const [key,value] of url.searchParams.entries()){if(!groups.has(key))groups.set(key,new Map());const byUrl=groups.get(key);if(!byUrl.has(urlIndex))byUrl.set(urlIndex,[]);byUrl.get(urlIndex).push(value);}});
      const outputParams=new URLSearchParams();
      for(const [key,valuesByUrl] of groups){
        const allValues=[...valuesByUrl.values()].flat();
        if(allValues.some(value=>value.includes(","))){
          const mergedValues=[],seenInPreviousUrls=new Set();
          for(const values of valuesByUrl.values()){
            const currentUrlValues=values.flatMap(value=>value.split(","));
            for(const item of currentUrlValues) if(item===""||!seenInPreviousUrls.has(item)) mergedValues.push(item);
            for(const item of currentUrlValues) if(item!=="") seenInPreviousUrls.add(item);
          }
          outputParams.append(key,mergedValues.join(","));
        }else{
          const seenInPreviousUrls=new Set();
          for(const values of valuesByUrl.values()){
            for(const value of values) if(value===""||!seenInPreviousUrls.has(value)) outputParams.append(key,value);
            for(const value of values) if(value!=="") seenInPreviousUrls.add(value);
          }
        }
      }
      const output=new URL(base.origin+base.pathname); output.search=outputParams.toString(); output.hash=base.hash; return output.href;
    }

