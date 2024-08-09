<template>
  <main>
    <div class="container d-flex justify-content-center align-items-center min-vh-100">
      <!----------------------- Login Container -------------------------->

      <div style="width: 800px" class="row border rounded-5 p-3 bg-white shadow box-area">
        <!--------------------------- Left Box ----------------------------->

        <div
          class="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
          style="background: white"
        >
          <div class="featured-image mb-3">
            <img src="/src/assets/mundiNoviColor.png" class="img-fluid" style="width: 250px" />
          </div>
          <small class="text-black text-wrap text-center" style="width: 17rem"
            >Súper limpio, A súper precio</small
          >
        </div>

        <!-------------------- ------ Right Box ---------------------------->

        <RouterView></RouterView>
      </div>
    </div>
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');

body {
  font-family: 'Poppins', sans-serif;
  background: #ececec;
}

/*------------ Login container ------------*/

.box-area {
  width: 930px;
}

/*------------ Right box ------------*/

.right-box {
  padding: 40px 30px 40px 40px;
}

/*------------ Custom Placeholder ------------*/

::placeholder {
  font-size: 16px;
}

.rounded-4 {
  border-radius: 20px;
}
.rounded-5 {
  border-radius: 30px;
}

/*------------ For small screens------------*/

@media only screen and (max-width: 768px) {
  .box-area {
    margin: 0 10px;
  }
  .left-box {
    height: 100px;
    overflow: hidden;
  }
  .right-box {
    padding: 20px;
  }
}
</style>
