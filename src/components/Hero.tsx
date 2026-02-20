import { motion } from 'motion/react';
import { ArrowRight, Linkedin, MapPin, Phone, Wand2 } from 'lucide-react';
import { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

export default function Hero() {
  const [enhancedImage, setEnhancedImage] = useState<string | null>(null);
  const [isEnhancing, setIsEnhancing] = useState(false);

  const handleEnhance = async () => {
    try {
      setIsEnhancing(true);
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        alert("API Key not found. Please configure GEMINI_API_KEY.");
        return;
      }

      // Fetch the current image
      const response = await fetch('/profile.png');
      const blob = await response.blob();
      
      const base64data = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const result = reader.result as string;
          resolve(result.split(',')[1]);
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
      
      const ai = new GoogleGenAI({ apiKey });
      const genResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            {
              inlineData: {
                data: base64data,
                mimeType: "image/png",
              },
            },
            {
              text: 'Edit this photo to remove the white print/logo from the black shirt, making it a solid black shirt. Improve lighting and clarity for a professional headshot. Keep the face and blazer unchanged.',
            },
          ],
        },
      });
      
      let newImage = null;
      if (genResponse.candidates?.[0]?.content?.parts) {
        for (const part of genResponse.candidates[0].content.parts) {
          if (part.inlineData) {
            newImage = `data:image/png;base64,${part.inlineData.data}`;
            break;
          }
        }
      }
      
      if (newImage) {
        setEnhancedImage(newImage);
      } else {
        alert("Could not generate enhanced image. The model might have returned text instead.");
        console.log(genResponse);
      }

    } catch (error) {
      console.error("Error enhancing image:", error);
      alert("Failed to enhance image. See console for details.");
    } finally {
      setIsEnhancing(false);
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-gray-50 to-brand-gray/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-brand-dark uppercase bg-brand-light/30 rounded-full">
              Available for Work
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Hello, I'm <br />
              <span className="text-brand-dark">Carl Jasper Janea</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              A versatile professional with expertise in Transport Allocation, Electrical Maintenance, and Creative Digital Services. I bring precision, efficiency, and creativity to every project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#portfolio"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-brand-dark hover:bg-brand-medium transition-colors shadow-lg shadow-brand-dark/20"
              >
                View Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/carl-jasper-janea-8736313a9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                <Linkedin className="mr-2 h-5 w-5 text-[#0077b5]" />
                LinkedIn Profile
              </a>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-500">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-brand-medium" />
                Negros Oriental, Philippines
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-brand-medium" />
                +63 905 230 3855
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[3/4] max-w-md mx-auto group">
              <img 
                src={enhancedImage || "/profile.png"} 
                alt="Carl Jasper Janea" 
                className="w-full h-full object-cover transition-opacity duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-serif text-2xl font-bold">Carl Jasper Janea</p>
                <p className="text-white/80">Virtual Assistant & Technician</p>
              </div>
              
              {/* Enhance Button */}
              {!enhancedImage && (
                <button
                  onClick={handleEnhance}
                  disabled={isEnhancing}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-white/40 transition-colors disabled:opacity-50"
                  title="Enhance with AI"
                >
                  <Wand2 className={`w-5 h-5 ${isEnhancing ? 'animate-spin' : ''}`} />
                </button>
              )}
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-light/30 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-medium/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
