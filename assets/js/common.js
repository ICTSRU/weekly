
const sectorColors={NOC:'#1378b9',SOC:'#ef2020',CCCU:'#0cab58',AAU:'#f5b814',OPS:'#7a55c7'};
const sectorLabels={NOC:'NOC',SOC:'SOC',CCCU:'CCCU',AAU:'AAU',OPS:'Operations'};
const kpiDefinitions={
 NOC:[
  {key:'networkAvailability',label:'Network Availability',unit:'%',target:99.9,direction:'min'},
  {key:'internetAvailability',label:'Internet Availability',unit:'%',target:99.9,direction:'min'},
  {key:'majorOutages',label:'Major Outages',unit:'',target:0,direction:'max'},
  {key:'capacityUtilization',label:'Peak Capacity Utilization',unit:'%',target:80,direction:'max'}],
 SOC:[
  {key:'criticalIncidents',label:'Critical Security Incidents',unit:'',target:0,direction:'max'},
  {key:'openCriticalVulnerabilities',label:'Open High/Critical Vulnerabilities',unit:'',target:0,direction:'max'},
  {key:'patchCompliance',label:'Patch Compliance',unit:'%',target:95,direction:'min'},
  {key:'monitoringCoverage',label:'Security Monitoring Coverage',unit:'%',target:99,direction:'min'}],
 CCCU:[
  {key:'applicationAvailability',label:'Application Availability',unit:'%',target:99.5,direction:'min'},
  {key:'slaCompliance',label:'Request SLA Compliance',unit:'%',target:95,direction:'min'},
  {key:'highPriorityIssues',label:'Open High-Priority App Issues',unit:'',target:2,direction:'max'},
  {key:'integrationMilestones',label:'Integration Milestones On Track',unit:'%',target:90,direction:'min'}],
 AAU:[
  {key:'serviceAvailability',label:'Service Availability',unit:'%',target:99.5,direction:'min'},
  {key:'slaCompliance',label:'Request SLA Compliance',unit:'%',target:95,direction:'min'},
  {key:'criticalRequests',label:'Open Critical Requests',unit:'',target:0,direction:'max'},
  {key:'plannedActivities',label:'Planned Activities Completed',unit:'%',target:90,direction:'min'}],
 OPS:[
  {key:'serviceAvailability',label:'Operational Service Availability',unit:'%',target:99.5,direction:'min'},
  {key:'actionClosure',label:'Weekly Action Closure Rate',unit:'%',target:90,direction:'min'},
  {key:'highPriorityActions',label:'Pending High-Priority Actions',unit:'',target:2,direction:'max'},
  {key:'crossSectorSla',label:'Cross-Sector SLA Compliance',unit:'%',target:95,direction:'min'}]
};
function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function avg(arr){return arr.length?Math.round(arr.reduce((a,b)=>a+Number(b||0),0)/arr.length):0;}
function kpiStatus(def,value){
 if(value===''||value===null||value===undefined||Number.isNaN(Number(value))) return 'neutral';
 const v=Number(value),t=Number(def.target);
 if(def.direction==='min'){if(v>=t)return 'green';if(v>=t-5)return 'amber';return 'red';}
 if(v<=t)return 'green'; if(t===0)return v<=1?'amber':'red'; if(v<=t+Math.max(1,t*.25))return 'amber'; return 'red';
}
function kpiTarget(def){return `${def.direction==='min'?'≥':'≤'} ${def.target}${def.unit||''}`;}
function chipFor(x){
 if(['Critical','High','At Risk','Open'].includes(x))return 'red';
 if(['Medium','Attention Required','Monitoring','In Progress'].includes(x))return 'amber';
 if(['Low','On Track','Resolved','Completed','Planned'].includes(x))return 'green';
 return 'blue';
}
function toast(msg){const t=document.getElementById('toast');if(!t)return;t.textContent=msg;t.style.display='block';setTimeout(()=>t.style.display='none',2600);}
