// CV web claro y rompedor para Sergio Sabater Ruiz
import React, { useState } from "react";
import { motion } from "framer-motion";

const FOTO_PERFIL = "/sergio.jpg";
const FOTO_PREMIO = "campeon_genera.jpg";

// ...import y constantes igual que antes

export default function SergioCV() {
  const [dark, setDark] = useState(false);

  // Animación para las chips
  const chipVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: i => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.04, type: "spring", stiffness: 500 }
    }),
  };

  return (
    

      {/* HERO + FOTO */}
      <header className="relative flex flex-col items-center justify-center min-h-[35vh] py-10 px-4 bg-transparent">
        {/* Círculo animado fondo */}
        <motion.div
          className="absolute left-0 right-0 top-0 mx-auto w-[360px] h-[160px] rounded-full bg-[#1a8cff]/10 blur-3xl z-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="w-44 h-44 rounded-full border-4 border-[#1a8cff] shadow-xl bg-white overflow-hidden z-10 mb-4"
          initial={{ y: -60, opacity: 0, scale: 0.85 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, type: "spring" }}
        >
          <img src={FOTO_PERFIL} alt="Sergio Sabater Ruiz" className="object-cover w-full h-full" />
        </motion.div>
        <motion.h1
          className="text-4xl font-extrabold tracking-tight z-10 text-center text-[#1a8cff] drop-shadow-sm"
          initial={{ y: 30, opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.3, duration: 0.7, type: "spring" }}
        >
          Sergio Sabater Ruiz
        </motion.h1>
        <motion.div
          className="text-lg font-semibold text-[#195799] mt-2 mb-2 z-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          Ingeniería Telemática · IA & Desarrollo
        </motion.div>
        <motion.div
          className="flex gap-3 mt-2 z-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <a href="mailto:sergio.telematico@gmail.com" className="hover:underline text-[#1a8cff] font-bold">✉️</a>
          <a href="https://github.com/sergiosaba12" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#1a8cff] font-bold">GitHub</a>
          <a href="https://sergiosaba12.github.io/portfolio" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#1a8cff] font-bold">Portfolio</a>
          <a href="#" className="hover:underline text-[#1a8cff] font-bold">LinkedIn</a>
        </motion.div>
      </header>

      {/* SOBRE MI */}
      <motion.section
        className="max-w-3xl mx-auto -mt-10 mb-8 bg-white rounded-2xl p-8 shadow-2xl border border-[#cce6ff] relative z-20"
        initial={{ opacity: 0, y: 60, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        <motion.h2
          className="text-2xl font-bold mb-2 text-[#1a8cff]"
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Sobre mí
        </motion.h2>
        <motion.p
          className="text-lg text-[#1a1d29] opacity-90"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Estudiante de Ingeniería Telemática, especializado en IA, desarrollo y emprendimiento tecnológico. Me encanta aprender, crear soluciones y trabajar en equipo para dejar huella en el mundo digital.
        </motion.p>
      </motion.section>

      {/* BLOQUES PRINCIPALES */}
      <main className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-7 px-2 z-30">
        {[
          {
            title: "Experiencia",
            content: (
              <>
                <div className="mb-4">
                  <div className="font-semibold">Monitor de Ocio y Tiempo Libre (Prácticas)</div>
                  <div className="text-sm text-[#1a8cff]">IMC Meliana · Jul 2019</div>
                  <ul className="list-disc pl-5 text-[#2b3648] text-sm mt-1">
                    <li>Dinamización de actividades deportivas y educativas</li>
                    <li>Supervisión y trabajo con grupos infantiles</li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold">Voluntario Escuela de Verano</div>
                  <div className="text-sm text-[#1a8cff]">IMC Meliana · 2017-2018</div>
                  <ul className="list-disc pl-5 text-[#2b3648] text-sm mt-1">
                    <li>Organización de talleres y juegos educativos</li>
                    <li>Apoyo al equipo de monitores</li>
                  </ul>
                </div>
              </>
            ),
          },
          {
            title: "Educación",
            content: (
              <>
                <div className="mb-2">
                  <div className="font-semibold">Grado en Ingeniería Telemática</div>
                  <div className="text-sm text-[#1a8cff]">Universitat de València · 2021-2025</div>
                  <div className="text-sm">Redes, programación, sistemas distribuidos y telecomunicaciones</div>
                </div>
                <div className="mb-2">
                  <div className="font-semibold">Diploma en Inteligencia Artificial</div>
                  <div className="text-sm text-[#1a8cff]">Samsung Innovation Campus (UPV) · 2025</div>
                  <div className="text-sm">Python, estadística, machine learning, deep learning, LLM</div>
                </div>
                <div className="mb-2">
                  <div className="font-semibold">Curso Challenges in Data Science</div>
                  <div className="text-sm text-[#1a8cff]">Universitat de València · 2024</div>
                  <div className="text-sm">Big Data, AI, startups y comunicación</div>
                </div>
                <div>
                  <div className="font-semibold">Emprendimiento UVemprén</div>
                  <div className="text-sm text-[#1a8cff]">Universitat de València · 2024</div>
                </div>
              </>
            ),
          },
        ].map((block, idx) => (
          <motion.section
            key={block.title}
            className="rounded-2xl p-7 bg-white shadow-xl mb-2 border border-[#cce6ff] hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.025] transition-all duration-300"
            initial={{ opacity: 0, y: 60, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + idx * 0.1, type: "spring" }}
            whileHover={{ scale: 1.025, boxShadow: "0 6px 40px #1a8cff20" }}
          >
            <h3 className="text-xl font-bold text-[#195799] mb-3">{block.title}</h3>
            <div>{block.content}</div>
          </motion.section>
        ))}

        {/* Skills & Soft Skills */}
        <motion.section
          className="col-span-1 rounded-2xl p-7 bg-white shadow-xl flex flex-col gap-2 border border-[#cce6ff] hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.025] transition-all duration-300"
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: "spring" }}
          whileHover={{ scale: 1.025, boxShadow: "0 6px 40px #1a8cff20" }}
        >
          <h3 className="text-xl font-bold text-[#195799] mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2 mb-1">
            {["C/C++", "Python", "Java", "HTML/CSS/JS", "Git/GitHub", "Linux", "VSCode", "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "Keras", "OpenAI API"]
              .map((skill, i) => (
                <motion.span
                  key={skill}
                  className="bg-[#e6f4ff] text-[#1a8cff] font-bold rounded-xl px-3 py-1 text-xs shadow-sm border border-[#b3e0ff]"
                  variants={chipVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                >
                  {skill}
                </motion.span>
            ))}
          </div>
          <h3 className="text-xl font-bold text-[#195799] mt-3 mb-1">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {["Resolución de problemas", "Aprendizaje autónomo", "Trabajo en equipo", "Iniciativa y creatividad"].map((soft, i) => (
              <motion.span
                key={soft}
                className="bg-[#1a8cff] text-white rounded-xl px-3 py-1 text-xs font-semibold"
                variants={chipVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 10}
              >
                {soft}
              </motion.span>
            ))}
          </div>
          <h3 className="text-xl font-bold text-[#195799] mt-3 mb-1">Idiomas</h3>
          <div className="flex flex-wrap gap-2">
            {["Español (nativo)", "Valenciano (nativo)", "Inglés (B2 certificado)"].map((idioma, i) => (
              <motion.span
                key={idioma}
                className="bg-[#e6f4ff] text-[#1a8cff] rounded-xl px-3 py-1 text-xs border border-[#b3e0ff]"
                variants={chipVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 20}
              >
                {idioma}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* Proyectos & Certificaciones */}
        <motion.section
          className="col-span-1 rounded-2xl p-7 bg-white shadow-xl flex flex-col gap-2 border border-[#cce6ff] hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.025] transition-all duration-300"
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, type: "spring" }}
          whileHover={{ scale: 1.025, boxShadow: "0 6px 40px #1a8cff20" }}
        >
          <h3 className="text-xl font-bold text-[#195799] mb-2">Proyectos</h3>
          <div className="rounded-xl bg-[#f8fbff] p-4 shadow mb-3 border border-[#e0f0ff]">
            <div className="font-semibold">Aintegra <span className="text-[#1a8cff]">(en desarrollo)</span></div>
            <div className="text-sm">Solución tecnológica inclusiva para integración social y laboral mediante IA y accesibilidad digital.</div>
          </div>
          <h3 className="text-xl font-bold text-[#195799] mb-2 mt-1">Certificaciones</h3>
          <ul className="list-disc pl-5 text-[#1a8cff] text-sm">
            <li>Python Essentials - Banco Santander</li>
            <li>Testing e Integración Continua - Capgemini</li>
          </ul>
        </motion.section>
      </main>

      {/* PREMIOS - BLOQUE DESTACADO */}
      <motion.section
        className="max-w-5xl mx-auto my-10 rounded-3xl p-0 sm:p-10 bg-white shadow-2xl flex flex-col md:flex-row items-center gap-7 overflow-hidden relative border-2 border-[#a6d9ff]"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="flex-1 py-6 px-4">
          <motion.h3
            className="text-3xl font-black text-[#1a8cff] mb-3"
            initial={{ scale: 0.85, opacity: 0, y: 60 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, type: "spring" }}
          >
            🏆 Premios y Reconocimientos
          </motion.h3>
          <motion.div
            className="mb-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="block font-bold text-[#195799] text-xl">
              Ganador Concurso Gennera 5UCV - UV <span className="text-[#ffc300] text-lg">(2025)</span>
            </span>
            <span className="block text-base text-[#1a8cff]/80">Premio al mejor proyecto universitario de reto empresarial.</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
          >
            <span className="block font-bold text-[#195799] text-xl mt-3">
              3er puesto MOTIVEM Fest - UV <span className="text-[#ffc300] text-lg">(2024)</span>
            </span>
            <span className="block text-base text-[#1a8cff]/80">Reconocimiento a idea innovadora en emprendimiento universitario.</span>
          </motion.div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center py-6 px-4">
          <motion.div
            className="rounded-2xl overflow-hidden shadow-xl border-4 border-[#e6f4ff] max-w-xs w-full"
            whileHover={{ scale: 1.07, rotate: -2, boxShadow: "0 8px 40px #ffc30055" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={FOTO_PREMIO} alt="Premio Gennera Sergio" className="object-cover w-full h-64 transition-all duration-500" />
          </motion.div>
          <motion.span
            className="text-xs text-[#1a8cff] font-semibold mt-2 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Sergio Sabater Ruiz recibiendo el premio Gennera
          </motion.span>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="mt-10 mb-5 text-center text-[#1a8cff]/80 text-xs opacity-80">
        &copy; {new Date().getFullYear()} Sergio Sabater Ruiz — Web hecha con React, Tailwind y Framer Motion
      </footer>
    </div>
  );
}

