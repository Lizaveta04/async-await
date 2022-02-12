import GameSavingLoader from './basic';

console.log('app worked');

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    console.log(saving);
  } catch (error) {
    console.error(error);
  }
})();
