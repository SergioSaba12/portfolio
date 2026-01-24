// components/ui/Modal.jsx
import { memo } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Modal = memo(function Modal({ open, onClose, title, children }) {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
                    <motion.div
                        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-lg overflow-hidden"
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="flex items-center justify-between p-6 border-b border-gray-200">
                            <h3 className="text-2xl font-semibold">{title}</h3>
                            <button
                                onClick={onClose}
                                className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
                            >
                                ×
                            </button>
                        </div>
                        <div className="p-6 max-h-[70vh] overflow-y-auto">{children}</div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
});

export default Modal;
