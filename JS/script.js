document.getElementById('button').addEventListener('click', function(){
    document.querySelector('.popup').style.display = 'flex';
  })

  document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
})

// change ID to Class or add ID to button pick one