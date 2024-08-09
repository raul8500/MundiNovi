<template>
  <div class="col-md-6 right-box">
    <div class="row align-items-center">
      <div class="header-text mb-4">
        <h2>Hola!!</h2>
        <p>Estamos felices de tenerte de regreso.</p>
      </div>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control form-control-lg bg-light fs-6"
          placeholder="Usuario"
        />
      </div>
      <div class="input-group mb-1">
        <input
          type="password"
          class="form-control form-control-lg bg-light fs-6"
          placeholder="Contraseña"
        />
      </div>
      <div class="input-group mb-5 d-flex justify-content-between">
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="formCheck" />
          <label for="formCheck" class="form-check-label text-secondary"
            ><small>Recordarme</small></label
          >
        </div>
        <div class="forgot">
          <small><a href="#">Olvidaste tu contraseña?</a></small>
        </div>
      </div>
      <div class="input-group mb-3">
        <button @click="onLogin" class="btn btn-lg btn-primary w-100 fs-6">Inciar sesión</button>
      </div>
      <div class="row">
        <small class="text-center">Mundi Novi 2024. Todos los derechos©</small>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router';

const onLogin = () => {
  localStorage.setItem('usernId', 'abc123');
  router.replace({
    name: 'home',
  });
};
</script>
