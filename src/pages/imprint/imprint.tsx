import Header from "components/header"
import Footer from "components/footer"

function Imprint() {
  return (
    <div className="flex flex-col bg-gray1 text-darkblue text-start">
      <Header />
      <div className="flex flex-col items-start mt-[40px] tablet:mt-[56px] mx-[24px] tablet:mx-[232px] desktop:mx-[370px]">
        <div className="text-headline-m-600 desktop:text-headline-l-600">
          Imprint
        </div>
        <div className="text-paragraph-s-400 mt-[8px]">Updated 15 Jan 2023</div>

        <div className="text-headline-xs-600 mt-[32px] tablet:mt-[40px] desktop:mt-[48px]">
          Vorlesen Digital Media Gmbh
        </div>
        <div className="text-headline-s-400 mt-[8px]">
          <div>Marktplatz 34</div>
          <div>3470 Kirchberg am Wagram</div>
          <div>Österreich </div>
          <div className="mt-5">Kontakt:</div>
          <div>Telefon: +49 40 36 931 125</div>
          <div>E-Mail: post@vorlesen.app</div>
          <div className="mt-5">
            Vertretungsberichtigter Geschäftsführer Jan Wiechmann
          </div>
          <div className="mt-5">Registereintrag:</div>
          <div>Eingetragen im Handelsregister.</div>
          <div>Registergericht: Amtsgericht XXX</div>
          <div>Registernummer: XXX</div>
        </div>
        <div className="mt-[32px] tablet:mt-[40px] desktop:mt-[48px]">
          <div className="text-headline-xs-600 ">
            Disclaimer – rechtliche Hinweise
          </div>
          <div className="text-headline-s-400 mt-[8px] mb-[112px] gap-y-5 flex flex-col">
            <div>§ 1 Warnhinweis zu Inhalten</div>
            <div>
              Die kostenlosen und frei zugänglichen Inhalte dieser Webseite
              wurden mit größtmöglicher Sorgfalt erstellt. Der Anbieter dieser
              Webseite übernimmt jedoch keine Gewähr für die Richtigkeit und
              Aktualität der bereitgestellten kostenlosen und frei zugänglichen
              journalistischen Ratgeber und Nachrichten. Namentlich
              gekennzeichnete Beiträge geben die Meinung des jeweiligen Autors
              und nicht immer die Meinung des Anbieters wieder. Allein durch den
              Aufruf der kostenlosen und frei zugänglichen Inhalte kommt
              keinerlei Vertragsverhältnis zwischen dem Nutzer und dem Anbieter
              zustande, insoweit fehlt es am Rechtsbindungswillen des Anbieters.
            </div>
            <div>§ 2 Externe Links</div>
            <div>
              Diese Website enthält Verknüpfungen zu Websites Dritter ("externe
              Links"). Diese Websites unterliegen der Haftung der jeweiligen
              Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der
              externen Links die fremden Inhalte daraufhin überprüft, ob etwaige
              Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine
              Rechtsverstöße ersichtlich. Der Anbieter hat keinerlei Einfluss
              auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der
              verknüpften Seiten. Das Setzen von externen Links bedeutet nicht,
              dass sich der Anbieter die hinter dem Verweis oder Link liegenden
              Inhalte zu Eigen macht. Eine ständige Kontrolle der externen Links
              ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße
              nicht zumutbar. Bei Kenntnis von Rechtsverstößen werden jedoch
              derartige externe Links unverzüglich gelöscht.
            </div>
            <div>§ 3 Urheber- und Leistungsschutzrechte</div>
            <div>
              Die auf dieser Website veröffentlichten Inhalte unterliegen dem
              deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen
              Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung
              bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder
              jeweiligen Rechteinhabers. Dies gilt insbesondere für
              Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung,
              Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder
              anderen elektronischen Medien und Systemen. Inhalte und Rechte
              Dritter sind dabei als solche gekennzeichnet. Die unerlaubte
              Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter
              Seiten ist nicht gestattet und strafbar. Lediglich die Herstellung
              von Kopien und Downloads für den persönlichen, privaten und nicht
              kommerziellen Gebrauch ist erlaubt.
            </div>
            <div>
              Die Darstellung dieser Website in fremden Frames ist nur mit
              schriftlicher Erlaubnis zulässig.
            </div>
            <div>§ 4 Besondere Nutzungsbedingungen</div>
            <div>
              Soweit besondere Bedingungen für einzelne Nutzungen dieser Website
              von den vorgenannten Paragraphen abweichen, wird an entsprechender
              Stelle ausdrücklich darauf hingewiesen. In diesem Falle gelten im
              jeweiligen Einzelfall die besonderen Nutzungsbedingungen.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Imprint
