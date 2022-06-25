export const useItems = () => {
  const items = useState('items', () => []);

  const mutateItems = (arr) => items.value = arr;

  return {
    items,
    mutateItems
  }
}

export const useFetchItems = () => {
    interface Res {
    data: Object
  }
  const {data} = useAsyncData('items', async () => {
    const {data}: Res = await $fetch('http://ddragon.leagueoflegends.com/cdn/12.11.1/data/en_US/item.json');
    return data;
  })

  const res = [];
  for(let item in data.value) {
    res.push(data.value[item]);
  } 


  return res;
}