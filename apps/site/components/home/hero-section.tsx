'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Download, Github, Linkedin, Instagram, Twitter } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  TextAnimation,
  AnimatedWord,
  TypedText,
} from '@/components/motions/text-animation';

export function HeroSection() {
  const t = useTranslations();

  const skills = [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Tailwind',
    'UI/UX',
  ];

  const IconMap = [
    { icon: <Github size={18} />, label: 'GitHub' },
    { icon: <Linkedin size={18} />, label: 'LinkedIn' },
    { icon: <Instagram size={18} />, label: 'Instagram' },
    { icon: <Twitter size={18} />, label: 'Twitter' },
  ];

  return (
    <section className="flex min-h-[calc(100vh-146.4px)] items-center p-20 max-sm:p-4">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="flex justify-center">
            <div className="p-2">
              <TextAnimation delay={0.1}>
                <p className="text-muted-foreground mb-2 font-mono">
                  Software Developer
                </p>
              </TextAnimation>

              <motion.h1
                className="mb-6 text-5xl font-bold md:text-6xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <AnimatedWord delay={0.3}>{t('home.hi')}</AnimatedWord>
                <br />
                <TypedText
                  text="Norush"
                  delay={0.8}
                  className="text-primary mt-2 block"
                />
              </motion.h1>

              <TextAnimation delay={1.2}>
                <p className="text-muted-foreground mb-6 max-w-md">
                  {t('home.introduce')}
                </p>
              </TextAnimation>

              <motion.div
                className="mb-8 flex flex-wrap gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="skill-tag cursor-pointer px-3 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </motion.div>

              <motion.div
                className="mb-8 flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >
                <Button className="btn-pulse dark:bg-fluo-500 relative gap-2 overflow-hidden rounded-full">
                  <span className="relative z-10 flex items-center gap-2 ">
                    <Download size={16} />
                    DOWNLOAD CV
                  </span>
                  <motion.div
                    className="bg-primary/10 absolute inset-0"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '0%' }}
                    transition={{ duration: 0.4 }}
                  />
                </Button>

                <div className="flex gap-3">
                  {IconMap.map((social, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      custom={index}
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="hover-glow hover:border-primary hover:text-primary rounded-full transition-all duration-300"
                        aria-label={social.label}
                      >
                        {social.icon}
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="hidden justify-center lg:flex "
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, type: 'spring' }}
          >
            <div className="h-[200px] w-[200px] lg:h-[400px] lg:w-[400px]">
              <div className="flex h-full w-full items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="h-full w-full"
                >
                  <Image
                    src="/banner/shape.svg?height=400&width=400"
                    alt="Norush"
                    width={400}
                    height={400}
                    className="cursor-grab object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
