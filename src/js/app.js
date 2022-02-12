import GameSavingLoader from './basic';

console.log('app worked');

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    console.log(saving);
  } catch (err) {
    console.error(new Error('Ошибка!Не удалось распарсить строку!'));
  }
})();
