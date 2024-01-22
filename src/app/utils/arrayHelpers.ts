function sort<T>(list: T[], sortBy: string): T[] {

  if (!sortBy || !list.length) {
    // If property is invalid or array is empty, return the original array
    return list.slice();
  }


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