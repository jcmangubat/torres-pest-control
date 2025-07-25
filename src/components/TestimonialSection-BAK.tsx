import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            14-15 years of trusted service in Davao
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700">
            <CardContent className="p-8">
              <Quote className="h-8 w-8 text-green-600 dark:text-green-400 mb-4" />
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                "Thank you sa pagsalig Ma'am Coleen... arrived to a clean and safe environment."
              </p>
              <div className="flex items-center">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Facebook Review</span>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-700 dark:to-gray-800">
            <CardContent className="p-8">
              <Quote className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                "Professional service with trained professionals. Highly recommended for pest control in Davao!"
              </p>
              <div className="flex items-center">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Satisfied Customer</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;