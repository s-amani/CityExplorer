function sort<T>(list: T[], sortBy: string) : T[] {

    return list.sort((current, next) => {
      type objectKey = keyof typeof current;
      const propName = sortBy as objectKey;

      if (current[propName] < next[propName]) 
        return -1;

        if (current[propName] > next[propName]) 
        return 1;

      return 0;
    });
  } 

  export const ArrayHelper = {
    sort: sort
  }