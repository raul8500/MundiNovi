<template>
  <header>
    <MDBNavbar style="background-color: #f6fcfe" expand="lg" container>
      <MDBNavbarBrand href="#">
        <img src="/src/assets/mundiNoviColor.png" height="60" alt="" loading="lazy" />
        <div style="display: flex; flex-direction: column; margin-left: 10px">
          <a style="font-weight: 700; font-size: 20pt; margin-bottom: 2px">
            <span style="color: #02198e">Mundi</span>
            <span style="color: #1887ca">Novi</span>
          </a>
          <a style="font-size: 10pt; font-weight: 400; color: #333; line-height: 1">
            Super limpio, A super Precio
          </a>
        </div>
      </MDBNavbarBrand>

      <MDBNavbarNav right class="mb-2 mb-lg-0">
        <!-- Center links -->
        <MDBNavbarItem to="#" active
          ><i class="fa-solid fa-basket-shopping"></i> Productos
        </MDBNavbarItem>
        <MDBNavbarItem to="#" active><i class="fa-solid fa-shop"></i> Sucursales </MDBNavbarItem>
        <MDBNavbarItem to="#" active
          ><i class="fa-regular fa-address-card"></i> Contacto
        </MDBNavbarItem>
        <!-- Navbar dropdown -->

        <!-- Center links -->
      </MDBNavbarNav>
    </MDBNavbar>
  </header>
  <main style="background-color: #f6fcfe; max-height: 100vh">
    <MDBCarousel v-model="carousel5" :items="items5" />
  </main>
</template>

<style scoped>
html,
body {
  background-color: #f6fcfe;
  margin: 0;
  height: 100%;
}
</style>

<script setup lang="ts">
import { ref } from 'vue';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBBtn,
  MDBIcon,
  MDBCarousel,
} from 'mdb-vue-ui-kit';

const items5 = [
  {
    src: 'https://i.postimg.cc/xjZLSfm5/Banners-01.jpg',
    alt: '...',
    label: 'First slide label',
    caption: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
  },
  {
    src: 'https://mdbootstrap.com/img/Photos/Slides/img%20(22).webp',
    alt: '...',
    label: 'Second slide label',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    src: 'https://mdbootstrap.com/img/Photos/Slides/img%20(23).webp',
    alt: '...',
    label: 'Third slide label',
    caption: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
  },
];

const carousel5 = ref(0);
</script>
