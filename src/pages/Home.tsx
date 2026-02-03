import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { appData } from "@/data/mockData";
import { Link } from "react-router-dom";
import { Cake, Cookie, PartyPopper } from "lucide-react";

export default function Home() {
  const categories = [
    {
      name: "Bolos",
      description: "Bolos personalizados com massa fofinha e recheios deliciosos.",
      icon: <Cake className="h-12 w-12 text-[#FFB6C1]" />,
      link: "/produtos?category=bolos",
      image: "https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=delicious%20decorated%20cake%20pink%20and%20gold%20theme%20studio%20lighting%20high%20quality&image_size=landscape_4_3"
    },
    {
      name: "Doces",
      description: "Brigadeiros gourmet e tradicionais para sua festa.",
      icon: <Cookie className="h-12 w-12 text-[#FFB6C1]" />,
      link: "/produtos?category=doces",
      image: "https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=gourmet%20brigadeiros%20brazilian%20sweets%20assorted%20flavors%20studio%20shot&image_size=landscape_4_3"
    },
    {
      name: "Cupcakes",
      description: "Mini bolinhos recheados e decorados com carinho.",
      icon: <PartyPopper className="h-12 w-12 text-[#FFB6C1]" />,
      link: "/produtos?category=cupcakes",
      image: "https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=decorated%20cupcakes%20pink%20frosting%20cute%20dessert&image_size=landscape_4_3"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#FFF0F5] overflow-hidden">
         <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=confectionery%20background%20pastel%20pink%20pattern%20sweets&image_size=landscape_16_9')] bg-cover bg-center"></div>
        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center space-y-4 mx-auto">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none font-poppins text-[#FFB6C1] drop-shadow-sm bg-white/80 p-2 rounded-lg">
            {appData.configuration.site_name}
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 bg-white/80 p-2 rounded-lg">
            {appData.configuration.our_structure}
          </p>
          <div className="space-x-4">
            <Link to="/produtos">
              <Button size="lg" className="bg-[#FFB6C1] hover:bg-[#FFA0B0] text-white cursor-pointer">
                Ver Cardápio
              </Button>
            </Link>
            <a href={`https://wa.me/${appData.configuration.site_phone}`} target="_blank" rel="noreferrer">
              <Button variant="outline" size="lg" className="bg-white hover:bg-gray-100 cursor-pointer">
                Fale Conosco
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#FFB6C1] font-poppins">
            Nossas Delícias
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link to={category.link} key={category.name}>
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 border-[#FFB6C1]/20 cursor-pointer">
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">{category.icon}</div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">{category.name}</h3>
                    <p className="text-gray-500">{category.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F5F5F5]">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#FFB6C1] font-poppins">
            Como Funciona
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {Object.entries(appData.configuration.how_works).map(([step, description], index) => (
              <div key={step} className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD700] text-white font-bold text-xl">
                  {index + 1}
                </div>
                <p className="text-gray-600 font-medium max-w-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
