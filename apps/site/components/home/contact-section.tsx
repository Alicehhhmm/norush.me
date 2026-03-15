'use client';

import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { FadeInWhenVisible } from '@/components/motions/scroll-animation';
import { R3DCard } from '@/components/common';

export function ContactSection() {
  return (
    <section id="contact" className="bg-muted/30 px-20 py-20">
      <div className="container">
        <FadeInWhenVisible className="mb-16 text-center">
          <Button
            variant="outline"
            className="text-fluo-500 bg-muted/30 mb-1 rounded-full text-xl font-medium dark:bg-black"
          >
            Contact
          </Button>
          <h2 className="mb-4 text-3xl font-bold">Get In Touch</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out!
          </p>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <R3DCard className="h-full justify-center border-none">
              <h3 className="mb-6 text-xl font-bold">Github</h3>
            </R3DCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <R3DCard className="h-full border-none  ">
              <h3 className="mb-6 text-xl font-bold">Contact Information</h3>
            </R3DCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <R3DCard className="h-full border-none ">
              <h3 className="mb-6 text-xl font-bold">Contact Information</h3>
            </R3DCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
