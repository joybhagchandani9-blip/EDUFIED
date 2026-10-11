import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Hero } from '../components/home/Hero';
import { SwitchingPanels } from '../components/home/SwitchingPanels';
import { HowItWorks } from '../components/home/HowItWorks';
import { SubjectsSection } from '../components/home/SubjectsSection';
import { TeacherRecruitment } from '../components/home/TeacherRecruitment';
import { Testimonials } from '../components/home/Testimonials';
import { FAQ } from '../components/home/FAQ';

// Modals
import { TeacherBookingModal } from '../components/teachers/TeacherBookingModal';
import { BatchEnrollModal } from '../components/batches/BatchEnrollModal';
import { TeacherProfileModal } from '../components/teachers/TeacherProfileModal';
import { BatchDetailModal } from '../components/batches/BatchDetailModal';
import { BecomeTeacherModal } from '../components/common/BecomeTeacherModal';
import { Teacher, Batch } from '../types';

export const HomePage: React.FC = () => {
  const { 
    teachers, 
    batches, 
    activeLearningStyle, 
    setActiveLearningStyle 
  } = useApp();

  // Hero Search states
  const [heroSearchSubject, setHeroSearchSubject] = useState('');
  const [heroSearchGrade, setHeroSearchGrade] = useState('');
  const [heroSearchLocation, setHeroSearchLocation] = useState('');

  // Modals state
  const [selectedTeacherForBooking, setSelectedTeacherForBooking] = useState<Teacher | null>(null);
  const [selectedTeacherForProfile, setSelectedTeacherForProfile] = useState<Teacher | null>(null);
  const [selectedBatchForEnroll, setSelectedBatchForEnroll] = useState<Batch | null>(null);
  const [selectedBatchForDetail, setSelectedBatchForDetail] = useState<Batch | null>(null);
  const [becomeTeacherOpen, setBecomeTeacherOpen] = useState(false);

  // Handle Search Submission from Hero
  const handleHeroSearchSubmit = (params: { subject: string; grade: string; location: string }) => {
    setHeroSearchSubject(params.subject);
    setHeroSearchGrade(params.grade);
    setHeroSearchLocation(params.location);
  };

  // Handle category click in Subjects Section
  const handleSelectCategory = (categoryName: string) => {
    setHeroSearchSubject(categoryName);
    // Smooth scroll up to panels
    const el = document.getElementById('learning-panels-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <Hero
        activeTab={activeLearningStyle}
        onTabChange={setActiveLearningStyle}
        onSearchSubmit={handleHeroSearchSubmit}
        searchSubject={heroSearchSubject}
        setSearchSubject={setHeroSearchSubject}
        searchGrade={heroSearchGrade}
        setSearchGrade={setHeroSearchGrade}
        searchLocation={heroSearchLocation}
        setSearchLocation={setHeroSearchLocation}
      />

      {/* 2. Main Feature: Two Major Switching Panels */}
      <SwitchingPanels
        activeTab={activeLearningStyle}
        onTabChange={setActiveLearningStyle}
        teachers={teachers}
        batches={batches}
        onBookTeacher={(teacher) => setSelectedTeacherForBooking(teacher)}
        onViewTeacher={(teacher) => setSelectedTeacherForProfile(teacher)}
        onJoinBatch={(batch) => setSelectedBatchForEnroll(batch)}
        onViewBatch={(batch) => setSelectedBatchForDetail(batch)}
        initialSearchSubject={heroSearchSubject}
        initialSearchGrade={heroSearchGrade}
        initialSearchLocation={heroSearchLocation}
      />

      {/* 3. How EDUFIED Works */}
      <HowItWorks
        onExplore={() => {
          const el = document.getElementById('learning-panels-section');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 4. Subjects & Learning Categories */}
      <SubjectsSection onSelectCategory={handleSelectCategory} />

      {/* 5. Teacher Recruitment Section */}
      <TeacherRecruitment onOpenApplication={() => setBecomeTeacherOpen(true)} />

      {/* 6. Testimonials & Trust */}
      <Testimonials />

      {/* 7. FAQ Section */}
      <FAQ />

      {/* Interactive Modals */}
      <TeacherBookingModal
        teacher={selectedTeacherForBooking}
        isOpen={Boolean(selectedTeacherForBooking)}
        onClose={() => setSelectedTeacherForBooking(null)}
      />

      <TeacherProfileModal
        teacher={selectedTeacherForProfile}
        isOpen={Boolean(selectedTeacherForProfile)}
        onClose={() => setSelectedTeacherForProfile(null)}
        onBook={(teacher) => setSelectedTeacherForBooking(teacher)}
      />

      <BatchEnrollModal
        batch={selectedBatchForEnroll}
        isOpen={Boolean(selectedBatchForEnroll)}
        onClose={() => setSelectedBatchForEnroll(null)}
      />

      <BatchDetailModal
        batch={selectedBatchForDetail}
        isOpen={Boolean(selectedBatchForDetail)}
        onClose={() => setSelectedBatchForDetail(null)}
        onJoin={(batch) => setSelectedBatchForEnroll(batch)}
      />

      <BecomeTeacherModal
        isOpen={becomeTeacherOpen}
        onClose={() => setBecomeTeacherOpen(false)}
      />
    </div>
  );
};
