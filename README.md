🕌 Digital Tasbeeh Web Application

Developed an interactive Arabic Digital Tasbeeh (تسبيح) web application designed to guide users through a complete dhikr session with automated counting and visual feedback.

The application initially displays a centered interface containing the title “ابدأ التسبيح” and a start button. Upon starting, the button is temporarily disabled to prevent interruption while the program automatically cycles through a sequence of dhikr phrases.

Each phrase is displayed with a distinct color and is automatically counted up to 33 repetitions, updating every 0.5 seconds using setInterval():

“سبحان الله” (white)

“الحمد لله” (red)

“الله أكبر” (gold)

After completing the counts, the full concluding phrase
“لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير”
is displayed once in green, followed by a final alert message:
“في ميزان حسناتكم”.

Once the session finishes, the start button is re-enabled, allowing the user to begin another round.
