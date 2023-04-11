trigger BadgeConfigurationTrigger on Employee_Badge__c (before update) {
    // List<Badge_Configuration__c> badgeList=[select Title__c, Category__c, Required_Points__c, image__c from Badge_Configuration__c ];
    // List<Employee_Badge__c> empBadgesToUpdate = new List<Employee_Badge__c>();
    
    // switch on Trigger.OperationType{  
    //     when Before_Insert{
    //         for(Employee_Badge__c empBadge:Trigger.new){
    //             for(Badge_Configuration__c bg:badgeList){
    //                 if(empBadge.Category__c==bg.Category__c && empBadge.Total_Points__c>=bg.Required_Points__c){
    //                     empBadge.Status__c='Pending';
    //                     empBadge.Badge_Configuration__c=bg.Id;
    //                 }
    //             }
    //         }           
    //     }
        
    //     when Before_Update{
    //         System.debug('this is in trigger update block');
    //         for(Employee_Badge__c empBadge:Trigger.new){
    //             if(Trigger.newMap.get(empBadge.Id).Total_Points__c==Trigger.oldMap.get(empBadge.Id).Total_Points__c && empBadge.Status__c=='Approved')
    //             {
    //                 System.debug('this is returning from the check if block');
    //                 return;
    //             }
                
    //             for(Badge_Configuration__c bg:badgeList){      
    //                 if(empBadge.Category__c==bg.Category__c && empBadge.Total_Points__c>=bg.Required_Points__c ){  
    //                     empBadge.Status__c='Pending';
    //                     empBadge.Badge_Configuration__c=bg.Id;
    //                     empBadgesToUpdate.add(empBadge);
    //                 }
    //             }
    //         }
    //         update empBadgesToUpdate;
    //     }
        
    // }
    
   // for(Employee_Badge__c empBadge:trigger.new ){
        // if(trigger.newMap.get(empBadge.Id).Total_Points__c==trigger.oldMap.get(empBadge.Id).Total_Points__c  &&  empBadge.Status__c=='Approved') {
        //  return;
        // }
        
        //for(Badge_Configuration__c bg:badgeList){
            
            //if(empBadge.Category__c==bg.Category__c && empBadge.Total_Points__c>=bg.Required_Points__c ){  
                // empBadge.Status__c='Pending';
                //empBadge.Badge_Configuration__c=bg.Id;
                //empBadgesToUpdate.add(empBadge);
           // }
       // }
        
   // }
        
}