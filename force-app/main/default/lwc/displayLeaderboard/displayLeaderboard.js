import { LightningElement ,track,wire} from 'lwc';
import getQuarter from '@salesforce/apex/LeaderboardData.getQuarter';
import getSubCategory from '@salesforce/apex/LeaderboardData.getSubCategory';
import getCategory from '@salesforce/apex/LeaderboardData.getCategory';
import getLeaderboard from '@salesforce/apex/LeaderboardData.getLeaderboard';

//Columns for showing datatable 
const columns = [
    {label : '', fieldName:'Row_Number__c',type:'number', initialWidth: 40 },
    // {label:'Employee Image',fieldName:'Employee_Image__c'},
    {label: 'Employee Name', fieldName: 'Employee__r.Name'},
    {label: 'Employee Id', fieldName: 'Employee__r.Employee_Id__c'},
    {label: 'Points', fieldName: 'Points__c'},
    {label: 'Quarter',fieldName:'Quarter__r.Name'},
    {label: 'Category',fieldName:'System_Configuration__r.Category__r.Name'},
    {label: 'Sub Category',fieldName:'System_Configuration__r.Sub_Category__r.Name'}
];


export default class DisplayLeaderboard extends LightningElement {

categoryOptions=[]

hideCheckboxColumn = true;
        
optionsSubCategory=[]

quarterOptions=[]


    // {label:"FY2022" ,value:"%"},
    // {label:"Q1FY22" ,value:"Q1"},
    // {label:"Q2FY22" ,value:"Q2"},
    // {label:"Q3FY22" ,value:"Q3"},
    // {label:"Q4FY22" ,value:"Q4"},


        @track columns=columns;
        @track categoryvalue='%';
        @track subCategoryValue='%';
        @track quarterValue='%';
        @track leaderboardArr=[];
        @track categories=[];
        @track subCategories=[];
        @track quarters;
        @track showLeaderBoard=false;
        
        
    //A common function for calling getdata function which will be used further 
  

       getLeaderboardData(){
    
        console.log('Inside the getLeaderboardData function')
            getLeaderboard({categoryValue:'%'+this.categoryvalue, subCategoryValue:'%'+this.subCategoryValue,quarterValue:'%'+this.quarterValue})
            .then(result=>{
                this.leaderboardArr = result.map((record, index) => {
                    return {
                        'Row_Number__c': index + 1,
                        // 'Employee_Image__c': record.Employee_Image__c,
                        'Employee__r.Name': record.Employee__r.Name,
                        'Employee__r.Employee_Id__c': record.Employee__r.Employee_Id__c,
                        'Points__c': record.Points__c,
                        'Quarter__r.Name': record.Quarter__r.Name,
                        'System_Configuration__r.Category__r.Name': record.System_Configuration__r.Category__r.Name,
                        'System_Configuration__r.Sub_Category__r.Name': record.System_Configuration__r.Sub_Category__r.Name
                    };
                });
                console.log('Inside getdata function');
                console.log('Leaderboard arr is ' +this.leaderboardArr);
                // this.leaderboardArr=result;
                // this.error=undefined;
             
            })

            .catch(error => {
                this.error = error;
                this.leaderboardArr = undefined;
            });

       
     
       }

       //wire method for importing quarter
        @wire(getQuarter)
        wiredQuarter({error,data}){
            if(data){
                this.quarters=data;

                this.quarterOptions=this.quarters.map(quarter=>{
                    return {
                        label: quarter.Name,
                        value: quarter.Name
                    };
                });
                this.quarterOptions=[{label:'All',value:'%'},...this.quarterOptions]
            }
             else if (error) {
            console.error(error);
        
        }
    }


       //wire method for importing categories
        @wire(getCategory)
        wiredCategory({error,data}){
            if(data){
                this.categories=data;

                this.categoryOptions=this.categories.map(category=>{
                    return {
                        label: category.Name,
                        value: category.Name
                    };
                });
                this.categoryOptions=[{label:'All',value:'%'},...this.categoryOptions]
            }
             else if (error) {
            console.error(error);
        
        }
    }

        //wire method for importing subcategories 
        @wire(getSubCategory, { categoryValue: '$categoryvalue' })
        wiredSubCategory({ error, data }){
        if (data) {
            this.subCategories = data;

             this.optionsSubCategory = this.subCategories.map(subCategory => {
                return {
                    label: subCategory.Name,
                    value: subCategory.Name
                };
            });
            this.optionsSubCategory=[{label:'All',value:'%'},...this.optionsSubCategory]
        } 
        else if (error) {
            console.error(error);
        }
       }


       // To show top 10 on leaderboard as sceen load 
       connectedCallback(){
        this.getLeaderboardData();
       }


       //To show top 10 on leaderboard as per quarter filter
        handleQuarterChange(event){
            this.quarterValue=event.detail.value;
            this.getLeaderboardData()
            // this.showLeaderBoard=true;
        }

        //To show top 10 on leaderboard as per category filter
        handleChangeCategory(event){
            this.categoryvalue=event.detail.value;
            this.getLeaderboardData()
            // this.showLeaderBoard=true;
           
        }

        //To show top 10 on leaderboard as per subcategory filter
        handleChangeSubCategory(event){
           this.subCategoryValue=event.detail.value;
           this.getLeaderboardData();
        //    this.showLeaderBoard=true;
        }



}