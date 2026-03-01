<template>
  <div class="font-body bg-paper text-ink min-h-screen">
    <NavBar />
    <HeroSection />
    <MarqueeBanner />
    <SobreNosotros />
    <BeneficiosSection />
    <PlanesSection />
    <ComoFunciona />
    <DocumentosSection />
    <ContactoSection />
    <FooterSection />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import MarqueeBanner from './components/MarqueeBanner.vue'
import SobreNosotros from './components/SobreNosotros.vue'
import PlanesSection from './components/PlanesSection.vue'
import ComoFunciona from './components/ComoFunciona.vue'
import DocumentosSection from './components/DocumentosSection.vue'
import ContactoSection from './components/ContactoSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>
