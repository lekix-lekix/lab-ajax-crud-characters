  /**
   * You might want to use this template to display each new characters
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template#examples
   */
  const characterTemplate = document.getElementById('template')

  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    try {
      const character = await axios.get('http://localhost:5005/characters', console.log('yay'));
      console.log(character);
    } catch (error) {
      console.log(error);
    }
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });

