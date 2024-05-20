export async function configurationLoader(settings: any) {
  let url1 = settings.url;
  let token1 = settings.token;
  let que = await fetch(url1, {
      headers: {
          'Authorization': 'Basic '+ token1
          }
      });
  if (que.ok){
      let jsontext = await que.json();
      return jsontext
      }
  else{
      alert("Ошибка HTTP:" + que.status);
      }
  }

