<template>
    <h1>resume</h1>
    <div class="card text-center">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <a class="nav-link active" aria-current="true" href="/resume">basic Info</a>
            </li>
            <li class="nav-item active">
                <router-link class="links" to="/education">Education</router-link>
            </li>
            <li class="nav-item active">
                <router-link class="links" to="/workExp">Work Experince</router-link>

            </li>
          </ul>
        </div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
</template>