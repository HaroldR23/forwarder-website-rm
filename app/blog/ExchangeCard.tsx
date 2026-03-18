import { DollarSign } from "lucide-react";
import { Card, CardContent } from "../common/Card";

const ExchangeCard = () => {
  return (
    <Card className="h-full hover:shadow-xl transition-shadow cursor-pointer overflow-hidden group">
      <div 
        className="relative h-56 overflow-hidden rounded-t-lg flex items-center justify-center" 
        onClick={() => window.open("https://dolarhoy.com/i/cotizaciones/dolar-blue", "_blank")}
      >
        <iframe
          src="https://dolarhoy.com/i/cotizaciones/dolar-blue"
          className="w-full h-full"

        ></iframe>

        {/* Overlays */}
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />

        <div className="absolute bottom-4 left-4">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-(--brand-ocean)">
            <DollarSign className="w-5 h-5 text-white" />
          </div>
        </div>

        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 rounded-full text-xs text-white bg-(--brand-green)">
            Economía
          </span>
        </div>
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl mb-3 text-(--brand-navy) group-hover:text-(--brand-ocean) transition-colors">
          Cotización Dólar Blue
        </h3>

        <p className="text-sm text-gray-600 mb-4">
          Información actualizada sobre la cotización del dólar blue.
        </p>
      </CardContent>
    </Card>
  );
};

export default ExchangeCard;
