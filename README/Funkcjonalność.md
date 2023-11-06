# Funkcjonalność

Główne działania strony to możliwość wstawiania ogłoszeń i organizowanie aukcji.

Serwery strony będą przechowywać konta użytkowników, aukcje, ogłoszenia.

<h2>Aukcje</h2>

Aukcje są wystawiane w zakładcę aukcję i nie są związane z ogłoszeniami.

Aukcja musi mieć wyznaczony:

* Czas - okres trwania aukcji.
* Cena wejściowa - min. 10zł.
* Nazwę, opis i zjęcie obiektu wystawianego.
* Właściciela aukcji.
* Typ aukcji - czy cena jest stała czy może się zwiększać.

Jeżeli typ aukcji to "Aukcja licytacyjna" to:

* Ma określoną długość czasową
* Zamiast opcji kupna jest opcja podbicia ceny
* Po minięciu czasu, aukcja jest przypisywana do konta i jest z niego pobierana kwota podana przez użytkownika.

**Uwaga**
Stan konta po wzięcu udziału w aukcji nie zmiania się, lecz jest zapisywana kwota w "rzeczywistym portfelu" która wynosi: Stan konta - podbita cena. Ten zabieg słuzy zapobieganiu przypadką w których, użytkownik chce wziąć udział w aukcji, ale nie ma pieniędzy do podbicia na ten moment, bo są obiecane w innej aukcji.

<img src="../graphic/md_graphics/Schemat_działania_portfela.png" alt="Strona rejestracji"/>



Do funkcji obiektu aukcji zalicza się:

* Po kliknięciu jest przekierowanie do strony obiektu.
* Pod obiektem jest sekcja komentarzy.
* Wypisywany jest wygrywający aukcji.
* Po zakończeniu aukcji nie można już wziąć udziału w niej, dać komentaż, a dla osoby która wygrała aukcję jest przypisywana ta aukcja i jest pobierana z konta opłata.
<h2>Konta</h2>

Konta to zbiory danych użytkownika obejmujące:
* Dane osobowe (Imię, nazwisko, wiek, płeć)
* Dane kontaktowe (email, telefon)
* Detale płatnicze (adres, formy doładowania konta)
* Aukcje wygrane i wystawione (id)
* Ogłoszenia wystawione (id)
* Wirtualy portfel (stan konta, waluta)
* Hasło

Konta są tworzone na stronie rejestracji...

<img src="../graphic/alpha/Register.png" alt="Strona rejestracji"/>

...do której można sie dostać stroną logowania lub stroną główną za pomocą linku w głównym sliderze.


<img src="../graphic/md_graphics/funk_home.png" alt="Strona główna"/>


<img src="../graphic/md_graphics/funk_log.png" alt="Strona logowania"/>

Konta użytkowników są przechowywane w bazie i część danych są wyświatnale w panelu konta użytkownika.

<img src="../graphic/alpha/.png" alt="Strona logowania"/>

<h2>Ogłoszenia</h2>


<h2>Portfel</h2>


