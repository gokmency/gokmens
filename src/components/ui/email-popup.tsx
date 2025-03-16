import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Loader2, Send, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { sendEmailWithProxy } from "@/lib/cors-proxy";

interface EmailPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EmailPopup({ isOpen, onClose }: EmailPopupProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) return;
    
    setStatus("sending");
    
    try {
      // Using Resend API with proxy
      const emailData = {
        from: "onboarding@resend.dev",
        to: "bgokmencelik@gmail.com",
        subject: `gokmens.com: New message from ${name}`,
        html: `
          <h2>New Contact Message from gokmens.com</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
        name,
        email,
        message
      };
      
      const result = await sendEmailWithProxy(emailData);
      
      if (result.error) {
        throw new Error(result.message || "An error occurred while sending the email");
      }
      
      setStatus("success");
      
      // Reset form after success
      setTimeout(() => {
        setName("");
        setEmail("");
        setMessage("");
        setStatus("idle");
        onClose();
      }, 1500);
    } catch (error) {
      console.error("Email sending error:", error);
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "An unknown error occurred");
      
      // Return to idle state after error
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 3000);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px] bg-black/90 border border-white/10 backdrop-blur-xl text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Send Me an Email
          </DialogTitle>
          <DialogDescription className="text-neutral-400">
            Share your ideas, projects, or questions. I'll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-4">
            <div className="relative">
              <Input
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-neutral-800/50 border-neutral-700 text-neutral-100 placeholder:text-neutral-500 focus:border-neutral-300 transition-colors pl-4"
                disabled={status !== "idle"}
              />
              <motion.div 
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-neutral-50 to-neutral-300"
                initial={{ width: 0 }}
                animate={{ width: name ? '100%' : '0%' }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            <div className="relative">
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-neutral-800/50 border-neutral-700 text-neutral-100 placeholder:text-neutral-500 focus:border-neutral-300 transition-colors pl-4"
                disabled={status !== "idle"}
              />
              <motion.div 
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-neutral-50 to-neutral-300"
                initial={{ width: 0 }}
                animate={{ width: email ? '100%' : '0%' }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            <div className="relative">
              <Textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="bg-neutral-800/50 border-neutral-700 text-neutral-100 placeholder:text-neutral-500 min-h-[120px] focus:border-neutral-300 transition-colors pl-4"
                disabled={status !== "idle"}
              />
              <motion.div 
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-neutral-50 to-neutral-300"
                initial={{ width: 0 }}
                animate={{ width: message ? '100%' : '0%' }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
          
          <div className="flex justify-end">
            <AnimatePresence mode="wait">
              {status === "idle" && (
                <motion.div
                  key="send"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <Button 
                    type="submit" 
                    className="bg-gradient-to-r from-neutral-50 to-neutral-300 text-black hover:opacity-90 transition-opacity flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send
                  </Button>
                </motion.div>
              )}
              
              {status === "sending" && (
                <motion.div
                  key="sending"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <Button 
                    disabled 
                    className="bg-gradient-to-r from-neutral-50 to-neutral-300 text-black hover:opacity-90 transition-opacity flex items-center gap-2"
                  >
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </Button>
                </motion.div>
              )}
              
              {status === "success" && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-full"
                >
                  <motion.div 
                    className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 flex items-center justify-center gap-2"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-green-500 font-medium">Message Sent!</span>
                  </motion.div>
                </motion.div>
              )}
              
              {status === "error" && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-full"
                >
                  <motion.div 
                    className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 flex items-center justify-center gap-2"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <span className="text-red-500 font-medium">
                      {errorMessage || "Failed to send your message. Please try again."}
                    </span>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
} 