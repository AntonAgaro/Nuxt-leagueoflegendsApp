export const useChampions = () => {
  const champions = useState('champions', () => []);

  const mutateChampions = arr => champions.value = arr;

  return {
    champions,
    mutateChampions
  }
}

export const useFetchChampions = () => {
  interface Res {
    data: Object
  }
  const {data: data} = useAsyncData('champions', async () => {
    const res: Res = await $fetch('http://ddragon.leagueoflegends.com/cdn/12.11.1/data/en_US/champion.json');
    const data = res.data;
    return data;
  })
  const res = [];
  for(let champ in data.value) {
    res.push(data.value[champ]);
  } 

  return res;
}