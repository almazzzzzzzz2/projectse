import React from 'react';

 function Fetch() {
  const pushData = async (e) => {
    e.preventDefault();
    const inputText = e.target[0].value;
    await FetchData(inputText);
  }

  async function FetchData(text) {
    const url = 'https://text-translator2.p.rapidapi.com/translate';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '4021e99b5emsh87eb9c55d199c71p19503bjsn5317e81bdc2f',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
      },
      body: new URLSearchParams({
        source_language: 'en',
        target_language: 'id',
        text: text
      })
    };
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    };
  }

  return (
    <div>
      <form onSubmit={pushData}>
        <label>Enter Text:</label>
        <input type="text" />
        <button type="submit">Translate</button>
      </form>
    </div>
  );
}
export default Fetch;

