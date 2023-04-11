public class SelectorForLeaderboard extends fflib_SObjectSelector{
  
    public Schema.SObjectType getSObjectType(){
        return  Feedback__c.SObjectType;
    }
        public List<Schema.SObjectField> getSObjectFieldList() {
        return new List<Schema.SObjectField> {
           Feedback__c.Employee__c,
            Feedback__c.Employee__r.Name,
            Feedback__c.Employee_Image__c,
            Feedback__c.points__c,
            Feedback__c.description__c,
            Feedback__c.category__c,
            Feedback__c.sub_Category__c,
            Feedback__c.quarter__c
            };
    }
    
    public List<Feedback__c> getLeaderboard(String categoryValue , String subCategoryValue, String quarterValue){
        String query=String.format('select {0} from {1} where Category__c like :categoryValue and Sub_Category__c like :subCategoryValue and Quarter__c like :quarterValue order by Points__c DESC limit 10'
                                   ,new List<String>{getFieldListString(),getSObjectName()});
        return (List<Feedback__c>) Database.query(query);
    }
    
    
}