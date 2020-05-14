import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompareFunctionsService {

  constructor() { }

  private sortDirection: string = 'desc';


  compareName(a, b) {
    if (this.sortDirection === 'desc') {
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      if (b.name.toLowerCase() > a.name.toLowerCase()) return -1;
    }

    if (this.sortDirection === 'asc') {
      if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
      if (b.name.toLowerCase() > a.name.toLowerCase()) return 1;
    }
   
  }


  comparePriority(a, b) {
    let prioA = a.priority;
    let prioB = b.priority;
    if (this.sortDirection === 'desc') {
      if (prioA === 'low' && prioB === 'med') {
        return 1;
      } else if (prioA === 'med' && prioB === 'high') {
        return 1;
      } else if (prioA === 'low' && prioB === 'high') {
        return 1;
      } else if (prioA === 'med' && prioB === 'low') {
        return -1;
      } else if (prioA === 'high' && prioB === 'low') {
        return -1;
      } else {
        return -1;
      }
    }

    if (this.sortDirection === 'asc') {
      if (prioA === 'low' && prioB === 'med') {
        return -1;
      } else if (prioA === 'med' && prioB === 'high') {
        return -1;
      } else if (prioA === 'low' && prioB === 'high') {
        return -1;
      } else if (prioA === 'med' && prioB === 'low') {
        return 1;
      } else if (prioA === 'high' && prioB === 'low') {
        return 1;
      } else {
        return 1;
      }
    }
    
  }

  compareHours(a, b) {
    if (this.sortDirection === 'desc') {
      if (a.hours > b.hours) {
        return -1;
      }
      if (a.hours < b.hours) {
        return 1;
      }
    }

    if (this.sortDirection === 'asc') {
      if (a.hours > b.hours) {
        return 1;
      }
      if (a.hours < b.hours) {
        return -1;
      }
    }
  }

  changeSortDirection(direction: string) {
    this.sortDirection = direction;
    console.log(this.sortDirection);
  }
  
}