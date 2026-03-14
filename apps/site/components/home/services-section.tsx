'use client';

import type React from 'react';
import { useTranslations } from 'next-intl';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Code, Layout, Database, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeInWhenVisible } from '@/components/motions/scroll-animation';
import { Button } from '../ui/button';

export function ServicesSection() {
  const t = useTranslations();

  const services = [
    {
      icon: <Code size={40} className="text-primary mb-4" />,
      title: 'Web Development',
      description:
        'Building responsive and performant web applications using modern frameworks.',
      skills: ['React & Next.js', 'Vue & Nuxt', 'Tailwind CSS', 'TypeScript'],
    },
    {
      icon: <Layout size={40} className="text-primary mb-4" />,
      title: 'UI/UX Design',
      description:
        'Creating intuitive and beautiful user interfaces and experiences.',
      skills: ['Wireframing', 'Prototyping', 'User Research', 'Design Systems'],
    },
    {
      icon: <Smartphone size={40} className="text-primary mb-4" />,
      title: 'Mobile Development',
      description:
        'Creating cross-platform mobile applications for iOS and Android.',
      skills: [
        'React Native',
        'Flutter',
        'Native iOS (Swift)',
        'Native Android (Kotlin)',
      ],
    },
  ];

  return (
    <motion.section
      id="services"
      className="bg-muted/30 px-20 py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <FadeInWhenVisible className="mb-16 text-center">
          <Button
            variant="outline"
            className="text-fluo-500 bg-muted/30 mb-1 rounded-full text-xl font-medium dark:bg-black"
          >
            Services
          </Button>
          <h2 className="mb-4 text-3xl font-bold">
            {t('home.services.label')}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            {t('home.services.desc')}
          </p>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <FadeInWhenVisible key={index} delay={index * 0.1}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                skills={service.skills}
              />
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function ServiceCard({
  icon,
  title,
  description,
  skills,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  skills: string[];
}) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <Card className="hover:border-primary/50 hover-glow h-full border-none transition-colors duration-300">
        <CardHeader>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{
              rotate: [0, -10, 10, -5, 5, 0],
              transition: { duration: 0.5 },
            }}
          >
            {icon}
          </motion.div>
          <CardTitle className="group">
            <span className="from-foreground to-foreground hover:from-primary hover:to-primary/70 bg-linear-to-r bg-clip-text text-transparent transition-all duration-300">
              {title}
            </span>
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="text-muted-foreground list-inside list-disc space-y-1">
            {skills.map((skill, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                whileHover={{ x: 5, color: 'hsl(var(--primary))' }}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}
