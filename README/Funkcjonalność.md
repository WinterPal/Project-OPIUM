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
<h2>Ogłoszenia</h2>


<h2>Portfel</h2>


