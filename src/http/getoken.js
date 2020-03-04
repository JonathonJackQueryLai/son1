export function gettoken() {
    axios.post("http://47.106.71.73:5000/api/TokenAuth/Authenticate", {
    userNameOrEmailAddress: "admin",
    password: "123qwe"
  })
  .then(function(response) {
    this.string1 = "Brearer " + response.data.result.accessToken;
    console.log('string1 ：'+this.string1);
    
  })
  .catch(function(error) {
    console.log(error);
  });
}
