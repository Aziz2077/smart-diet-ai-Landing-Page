import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import RegionalCarousel from './RegionalCarousel';
import styles from './CulturalShowcase.module.css';

// Regions in Algeria
const regions = [
  { id: 'all', name: 'All Regions', icon: '🇩🇿' },
  { id: 'kabylie', name: 'Kabylie', icon: '🏔️' },
  { id: 'sahara', name: 'Sahara', icon: '🏜️' },
  { id: 'coastal', name: 'Coastal', icon: '🌊' },
  { id: 'eastern', name: 