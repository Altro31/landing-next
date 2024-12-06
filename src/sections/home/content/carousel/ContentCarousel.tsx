import ProgrammingIcon from "@/assets/content/programming-icon.svg";
import SettingsIcon from "@/assets/content/settings-icon.svg";
import StructureIcon from "@/assets/content/structure-icon.svg";
import ContentCard from "@/sections/home/content/ContentCard";
import ContentIcon from "@/sections/home/content/ContentIcon";
import useEmblaCarousel from "embla-carousel-react";
import type { ComponentProps } from "react";
import { useTranslation } from "react-i18next";

export default function ContentCarousel({
  className,
}: ComponentProps<"section">) {
  const [emblaRef] = useEmblaCarousel({});
  const { t } = useTranslation();

  return (
    <section className={" " + className}>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <ContentCard
              icon={<ContentIcon icon={SettingsIcon} />}
              title={t("home.content.card1.title")}
              content={t("home.content.card1.content")}
            />
          </div>
          <div className="embla__slide">
            <ContentCard
              icon={<ContentIcon icon={ProgrammingIcon} />}
              title={t("home.content.card2.title")}
              content={t("home.content.card2.content")}
              primary
            />
          </div>
          <div className="embla__slide">
            <ContentCard
              icon={<ContentIcon icon={StructureIcon} />}
              title={t("home.content.card3.title")}
              content={t("home.content.card3.content")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
