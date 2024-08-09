<template>
  <div>
    <header>
      <MDBNavbar expand="lg" light bg="light" container>
        <MDBNavbarBrand href="#">Brand</MDBNavbarBrand>
        <MDBNavbarToggler
          @click="collapse1 = !collapse1"
          target="#navbarSupportedContent"
        ></MDBNavbarToggler>
        <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
          <MDBNavbarNav class="mb-2 mb-lg-0">
            <MDBNavbarItem href="/"> Home </MDBNavbarItem>
            <MDBNavbarItem href="/contact"> Contact </MDBNavbarItem>
            <MDBNavbarItem href="/pricing"> Pricing </MDBNavbarItem>
            <MDBNavbarItem href="/features"> Features </MDBNavbarItem>

            <MDBNavbarItem>
              <!-- Navbar dropdown -->
              <MDBDropdown class="nav-item" v-model="dropdown1">
                <MDBDropdownToggle tag="a" class="nav-link" @click="dropdown1 = !dropdown1"
                  >Dropdown</MDBDropdownToggle
                >
                <MDBDropdownMenu aria-labelledby="dropdownMenuButton">
                  <MDBDropdownItem href="#">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <!-- Search form -->
          <form class="d-flex input-group w-auto">
            <input
              type="search"
              class="form-control"
              placeholder="Type query"
              aria-label="Search"
            />
            <MDBBtn outline="primary"> Search </MDBBtn>
          </form>
        </MDBCollapse>
      </MDBNavbar>
    </header>

    <main>
      <RouterView></RouterView>
    </main>
  </div>
</template>

<script setup lang="ts">
import {
  MDBBtn,
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from 'mdb-vue-ui-kit';
import { ref } from 'vue';

const collapse1 = ref(false);
const dropdown1 = ref(false);
</script>
