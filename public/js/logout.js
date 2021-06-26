
  logout = async function() {
    const response = await fetch('/api/user/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
      alert("logged out");
      
    } else {
      alert("please sign in");
      //alert(response.statusText);
    }
  
  };

  const deleteClickHandlerLogout = async function() {
    await fetch(`/api/post/${postId}`, {
      method: 'DELETE'
    });
  
    document.location.replace('/board');
  };




//document.querySelector('#logout').addEventListener('click', logout);
document.getElementById("logout").addEventListener('click', logout);



