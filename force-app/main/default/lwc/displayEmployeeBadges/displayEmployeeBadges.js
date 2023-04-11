import { LightningElement ,wire ,api} from 'lwc';
import fetchEmpBadge from '@salesforce/apex/FetchEmployeeBadge.fetchEmpBadge';


export default class DisplayEmployeeBadges extends LightningElement {


    @api recordId;
       badgeList;
    categoryList = [];

  @wire(fetchEmpBadge, { employeeId: '$recordId' })
    wiredAssignedBadges({ error, data }) {
        if(data){
            this.badgeList = data;
            this.categoryList = Array.from(new Set(data.map(badge => badge.Category__r.Name)));
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.badgeList = undefined;
        }
        this.isLoading = false;
    }


}