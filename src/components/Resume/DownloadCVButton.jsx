import { Download } from 'lucide-react';
import cv from '../../assets/Abdullatif_Mnyamisi_cv.pdf';

const DownloadCVButton = () => {
  return (
    <div className="text-center">
      <a
        href={cv}
        download="Abdullatif_Mnyamisi_CV.pdf"
        className="inline-flex items-center gap-2 border-2 border-slate-900 px-10 py-4 font-bold uppercase text-xs tracking-widest hover:bg-slate-900 hover:text-white transition-all rounded-sm shadow-[4px_4px_0px_0px_rgba(252,211,77,1)] cursor-pointer"
      >
        <Download size={16} />
        Download CV
      </a>
    </div>
  );
};

export default DownloadCVButton;
