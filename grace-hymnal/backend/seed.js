const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./hymnal.db', (err) => {
  if (err) {
    console.error('Error opening database', err);
    return;
  }
  console.log('Connected to database');
});

const hymns = [
  {
    number: 1,
    title: "All Hail the Power of Jesus' Name",
    author: "Edward Perronet, 1779",
    category: "Praise and Opening",
    lyrics: `1. All hail the power of Jesus' name!
Let angels prostrate fall;
Bring forth the royal diadem,
And crown Him Lord of all.

2. Crown Him, ye martyrs of your God,
Who from His altar call;
Extol the stem of Jesse's rod,
And crown Him Lord of all.

3. Ye seed of Israel's chosen race,
Ye ransomed from the fall,
Hail Him who saves you by His grace,
And crown Him Lord of all.

4. Sinners, whose love can ne'er forget
The wormwood and the gall,
Go spread your trophies at His feet,
And crown Him Lord of all.

5. Let every kindred, every tribe
On this terrestrial ball,
To Him all majesty ascribe,
And crown Him Lord of all.

6. O that with yonder sacred throng
We at His feet may fall!
We'll join the everlasting song,
And crown Him Lord of all.`,
    audio: "/audio/allhailthepower.mp3"
  },
  {
    number: 2,
    title: "The Name of Jesus Is So Sweet",
    author: "W.C. Martin, 1908",
    category: "Praise and Opening",
    lyrics: `1. The name of Jesus is so sweet,
I love its music to repeat;
It makes my joys complete and full,
The precious name of Jesus.

Chorus:
Jesus, O how sweet the name!
Jesus, every day the same;
Jesus, let all saints proclaim
Its worthy praise forever.

2. I love the name of Him whose heart
Knows all my griefs and bears a part;
Who bids all anxious fears depart,
I love the name of Jesus.

3. No word of man can ever tell
How sweet the name I love so well;
O let its praises ever swell,
O let its praises ever swell,
The precious name of Jesus.`,
    audio: "/audio/thenameofjesus.mp3"
  },
  {
    number: 3,
    title: "Great Is Thy Faithfulness",
    author: "Thomas O. Chisholm, 1923",
    category: "Praise and Opening",
    lyrics: `1. Great is Thy faithfulness, O God my Father;
There is no shadow of turning with Thee;
Thou changest not, Thy compassions, they fail not;
As Thou hast been, Thou forever wilt be.

Chorus:
Great is Thy faithfulness!
Great is Thy faithfulness!
Morning by morning new mercies I see;
All I have needed Thy hand hath provided;
Great is Thy faithfulness, Lord, unto me!

2. Summer and winter and springtime and harvest,
Sun, moon and stars in their courses above
Join with all nature in manifold witness
To Thy great faithfulness, mercy and love.

3. Pardon for sin and a peace that endureth,
Thine own dear presence to cheer and to guide;
Strength for today and bright hope for tomorrow,
Blessings all mine, with ten thousand beside!`,
    audio: "/audio/greatisthyfaithfulness.mp3"
  },
  {
    number: 4,
    title: "Count Your Blessings",
    author: "Johnson Oatman Jr., 1897",
    category: "Praise and Opening",
    lyrics: `1. When upon life's billows you are tempest tossed,
When you are discouraged, thinking all is lost,
Count your many blessings, name them one by one,
And it will surprise you what the Lord hath done.

Chorus:
Count your blessings, name them one by one;
Count your blessings, see what God hath done;
Count your blessings, name them one by one;
Count your many blessings, see what God hath done.

2. Are you ever burdened with a load of care?
Does the cross seem heavy you are called to bear?
Count your many blessings, every doubt will fly,
And you will be singing as the days go by.

3. When you look at others with their lands and gold,
Think that Christ has promised you His wealth untold;
Count your many blessings, money cannot buy
Your reward in heaven, nor your home on high.

4. So, amid the conflict, whether great or small,
Do not be discouraged, God is over all;
Count your many blessings, angels will attend,
Help and comfort give you to your journey's end.`,
    audio: "/audio/countyourblessings.mp3"
  },
  {
    number: 5,
    title: "To God Be The Glory",
    author: "Fanny J. Crosby, 1875",
    category: "Praise and Opening",
    lyrics: `1. To God be the glory, great things He hath done;
So loved He the world that He gave us His Son,
Who yielded His life an atonement for sin,
And opened the life gate that all may go in.

Chorus:
Praise the Lord, praise the Lord,
Let the earth hear His voice!
Praise the Lord, praise the Lord,
Let the people rejoice!
O come to the Father, through Jesus the Son,
And give Him the glory, great things He hath done.

2. O perfect redemption, the purchase of blood,
To every believer the promise of God;
The vilest offender who truly believes,
That moment from Jesus a pardon receives.

3. Great things He hath taught us, great things He hath done,
And great our rejoicing through Jesus the Son;
But purer, and higher, and greater will be
Our wonder, our transport, when Jesus we see.`,
    audio: "/audio/togodbetheglory.mp3"
  },
  {
    number: 6,
    title: "Who Is on the Lord's Side?",
    author: "Frances R. Havergal, 1877",
    category: "Praise and Opening",
    lyrics: `1. Who is on the Lord's side? Who will serve the King?
Who will be His helpers, other lives to bring?
Who will leave the world's side? Who will face the foe?
Who is on the Lord's side? Who for Him will go?

Chorus:
By Thy call of mercy, by Thy grace divine,
We are on the Lord's side, Savior, we are Thine.

2. Not for weight of glory, not for crown and palm,
Enter we the army, raise the warrior psalm;
But for love that claimeth lives for whom He died:
He whom Jesus nameth must be on His side.

3. Jesus, Thou hast bought us, not with gold or gem,
But with Thine own lifeblood, for Thy diadem;
With Thy blessing filling each who comes to Thee,
Thou hast made us willing, Thou hast made us free.

4. Fierce may be the conflict, strong may be the foe,
But the King's own army none can overthrow;
Round His standard ranging, victory is secure,
For His truth unchanging makes the triumph sure.`,
    audio: "/audio/whoisonthelordsside.mp3"
  },
  {
    number: 7,
    title: "Standing on the Promises",
    author: "R. Kelso Carter, 1886",
    category: "Praise and Opening",
    lyrics: `1. Standing on the promises of Christ my King,
Through eternal ages let His praises ring;
Glory in the highest, I will shout and sing,
Standing on the promises of God.

Chorus:
Standing, standing,
Standing on the promises of God my Savior;
Standing, standing,
I'm standing on the promises of God.

2. Standing on the promises that cannot fail,
When the howling storms of doubt and fear assail,
By the living Word of God I shall prevail,
Standing on the promises of God.

3. Standing on the promises of Christ the Lord,
Bound to Him eternally by love's strong cord,
Overcoming daily with the Spirit's sword,
Standing on the promises of God.

4. Standing on the promises I cannot fall,
Listening every moment to the Spirit's call,
Resting in my Savior as my all in all,
Standing on the promises of God.`,
    audio: "/audio/standingonthepromises.mp3"
  },
  {
    number: 8,
    title: "My Heart and Voice I Raise",
    author: "Thomas Cotterill, 1815",
    category: "Praise and Opening",
    lyrics: `1. My heart and voice I raise,
To spread Messiah's praise;
Messiah's praise let all repeat:
The universal Lord.

2. The Savior comes! Let every tongue
His noblest honors sing;
Here let the bright seraphic throng
Leave all their harps and bring.

3. He comes to bless our race,
With full, with free, with sov'reign grace;
The gospel word of His dear Son,
Is peace on earth, good will to men.

4. Let earth and heaven agree,
Angels and men be joined,
To celebrate with me
The Savior of mankind.`,
    audio: "/audio/myheartandvoiceiraise.mp3"
  },
  {
    number: 9,
    title: "With Harps and With Viols",
    author: "Frances R. Havergal, 1874",
    category: "Praise and Opening",
    lyrics: `1. With harps and with viols there stands a great throng
In the presence of Jesus, and singeth this song:
Unto Him who hath loved us and washed us from sin,
Unto Him be the glory forever, Amen.

2. All these once were sinners, defiled in His sight,
Now arrayed in pure garments in praise they unite:
Unto Him who hath loved us and washed us from sin,
Unto Him be the glory forever, Amen.

3. He maketh the rebel a priest and a king,
He hath bought us and taught us this new song to sing:
Unto Him who hath loved us and washed us from sin,
Unto Him be the glory forever, Amen.

4. How helpless and hopeless we sinners had been,
If He never had loved us till cleansed from our sin:
Unto Him who hath loved us and washed us from sin,
Unto Him be the glory forever, Amen.`,
    audio: "/audio/withharpsandviols.mp3"
  },
  {
    number: 10,
    title: "Hark, Hark, My Soul!",
    author: "Frederick W. Faber, 1854",
    category: "Praise and Opening",
    lyrics: `1. Hark, hark, my soul! Angelic songs are swelling
O'er earth's green fields and ocean's wave-beat shore:
How sweet the truth those blessed strains are telling
Of that new life when sin shall be no more.

Chorus:
Angels of Jesus, angels of light,
Singing to welcome the pilgrims of the night!

2. Onward we go, for still we hear them singing,
"Come, weary souls, for Jesus bids you come;"
And through the dark, its echoes sweetly ringing,
The music of the gospel leads us home.

3. Far, far away, like bells at evening pealing,
The voice of Jesus sounds o'er land and sea;
And laden souls, by thousands meekly stealing,
Kind Shepherd, turn their weary steps to Thee.

4. Rest comes at length: though life be long and dreary,
The day must dawn, and darksome night be past;
All journeys end in welcomes to the weary,
And heaven, the heart's true home, will come at last.`,
    audio: "/audio/harkharkmysoul.mp3"
  },
  {
    number: 11,
    title: "For All the Lord Has Done for Me",
    author: "Contemporary - Lyrics withheld",
    category: "Praise and Opening",
    lyrics: `FOR all the Lord has done for me,
    I will never cease to sing;
    And for His grace so rich and free,
    I will never cease to praise Him
    I will never cease to praise Him
    My Savior! My Savior!
    I will never cease to praise Him
    He's done so much for me!,
    2.He gives me strength for every day,
     I never will cease to praise Him;
     He leads and guides me all the way,
     I never will cease to praise Him.
     Although the world His love neglect,
     I never will cease to praise Him;
     I could not such a friend reject,
     I never will cease to praise Him.
     He saves me every day and hour,
     I never will cease to praise Him;
     Just now I feel His cleansing power,
     I never will cease to praise Him.
     While on my journey here below,
     I never will cease to praise Him;
     And when to that bright world go,
     I never will cease to praise Him. `,
    audio: "/audio/forallthelordhasdone.mp3"
  },
  {
    number: 12,
    title: "O God of Bethel, by Whose Hand",
    author: "Philip Doddridge, 1736",
    category: "Praise and Opening",
    lyrics: `1. O God of Bethel, by whose hand
Thy people still are fed;
Who through this weary pilgrimage
Hast all our fathers led:

2. Our vows, our prayers, we now present
Before Thy throne of grace;
God of our fathers, be the God
Of their succeeding race.

3. Through each perplexing path of life
Our wandering footsteps guide;
Give us each day our daily bread,
And raiment fit provide.

4. O spread Thy covering wings around,
Till all our wanderings cease,
And at our Father's loved abode
Our souls arrive in peace.`,
    audio: "/audio/ogodofbethel.mp3"
  },
  {
    number: 13,
    title: "Holy, Holy, Holy! Lord God Almighty",
    author: "Reginald Heber, 1826",
    category: "Praise and Opening",
    lyrics: `1. Holy, holy, holy! Lord God Almighty!
Early in the morning our song shall rise to Thee;
Holy, holy, holy! merciful and mighty!
God in three Persons, blessed Trinity!

2. Holy, holy, holy! All the saints adore Thee,
Casting down their golden crowns around the glassy sea;
Cherubim and seraphim falling down before Thee,
Who wert, and art, and evermore shalt be.

3. Holy, holy, holy! though the darkness hide Thee,
Though the eye of sinful man Thy glory may not see;
Only Thou art holy; there is none beside Thee,
Perfect in power, in love, and purity.

4. Holy, holy, holy! Lord God Almighty!
All Thy works shall praise Thy name, in earth, and sky, and sea;
Holy, holy, holy! merciful and mighty!
God in three Persons, blessed Trinity!`,
    audio: "/audio/holyholyholy.mp3"
  },
  {
    number: 14,
    title: "Who Is He in Yonder Stall",
    author: "Benjamin R. Hanby, 1866",
    category: "Praise and Opening",
    lyrics: `1. Who is He in yonder stall,
At whose feet the shepherds fall?
'Tis the Lord! O wondrous story!
'Tis the Lord, the King of glory!

Chorus:
At His feet we humbly fall,
Crown Him, crown Him Lord of all!

2. Who is He the people bless,
Treading o'er the way with palms?
'Tis the Lord! O wondrous story!
'Tis the Lord, the King of glory!

3. Who is He that stands and weeps
At the grave where Lazarus sleeps?
'Tis the Lord! O wondrous story!
'Tis the Lord, the King of glory!

4. Who is He on yonder tree
Dies in grief and agony?
'Tis the Lord! O wondrous story!
'Tis the Lord, the King of glory!

5. Who is He that from the grave
Comes to heal and help and save?
'Tis the Lord! O wondrous story!
'Tis the Lord, the King of glory!`,
    audio: "/audio/whoisheinyonderstall.mp3"
  },
  {
    number: 15,
    title: "All Things Bright and Beautiful",
    author: "Cecil F. Alexander, 1848",
    category: "Praise and Opening",
    lyrics: `1. All things bright and beautiful,
All creatures great and small,
All things wise and wonderful,
The Lord God made them all.

2. Each little flower that opens,
Each little bird that sings,
He made their glowing colors,
He made their tiny wings.

3. The purple headed mountain,
The river running by,
The sunset and the morning,
That brightens up the sky;

4. The cold wind in the winter,
The pleasant summer sun,
The ripe fruits in the garden,
He made them every one.

5. He gave us eyes to see them,
And lips that we might tell,
How great is God Almighty,
Who has made all things well.`,
    audio: "/audio/allthingsbright.mp3"
  },
  {
    number: 16,
    title: "Joy to the World",
    author: "Isaac Watts, 1719",
    category: "Praise and Opening",
    lyrics: `1. Joy to the world, the Lord is come!
Let earth receive her King;
Let every heart prepare Him room,
And heaven and nature sing.

2. Joy to the earth, the Savior reigns!
Let men their songs employ;
While fields and floods, rocks, hills, and plains
Repeat the sounding joy.

3. No more let sins and sorrows grow,
Nor thorns infest the ground;
He comes to make His blessings flow
Far as the curse is found.

4. He rules the world with truth and grace,
And makes the nations prove
The glories of His righteousness,
And wonders of His love.`,
    audio: "/audio/joytotheworld.mp3"
  },
  {
    number: 17,
    title: "Hail, Thou Long Expected Jesus",
    author: "Charles Wesley, 1744",
    category: "Praise and Opening",
    lyrics: `1. Hail, Thou long expected Jesus,
Born to set Thy people free;
From our fears and sins release us;
Let us find our rest in Thee.

2. Israel's strength and consolation,
Hope of all the earth Thou art;
Dear desire of every nation,
Joy of every longing heart.

3. Born Thy people to deliver,
Born a child, and yet a King,
Born to reign in us forever,
Now Thy gracious kingdom bring.

4. By Thine own eternal Spirit
Rule in all our hearts alone;
By Thine all sufficient merit
Raise us to Thy glorious throne.`,
    audio: "/audio/hailthoulongexpected.mp3"
  },
  {
    number: 18,
    title: "Christians, Awake, Salute the Happy Morn",
    author: "John Byrom, 1749",
    category: "Praise and Opening",
    lyrics: `1. Christians, awake, salute the happy morn
Whereon the Savior of the world was born;
Rise to adore the mystery of love,
Which hosts of angels chanted from above;
With them the joyful tidings first begun
Of God incarnate and the Virgin's Son.

2. Then to the watchful shepherds it was told,
Who heard the angelic herald's voice: "Behold,
I bring good tidings of a Savior's birth
To you and all the nations upon earth:
This day hath God fulfilled His promised word,
This day is born a Savior, Christ the Lord."

3. He spake, and straightway the celestial choir
In hymns of joy, unknown before, conspire;
The praises of redeeming love they sang,
And heaven's whole orb with alleluias rang:
God's highest glory was their anthem still,
Peace upon earth, and unto men good will.`,
    audio: "/audio/christiansawake.mp3"
  },
  {
    number: 19,
    title: "Angels from the Realms of Glory",
    author: "James Montgomery, 1816",
    category: "Praise and Opening",
    lyrics: `1. Angels from the realms of glory,
Wing your flight o'er all the earth;
Ye who sang creation's story,
Now proclaim Messiah's birth:

Chorus:
Come and worship, come and worship,
Worship Christ, the newborn King.

2. Shepherds, in the field abiding,
Watching o'er your flocks by night,
God with us is now residing;
Yonder shines the infant light:

3. Sages, leave your contemplations,
Brighter visions beam afar;
Seek the great Desire of nations;
Ye have seen His natal star:

4. Saints, before the altar bending,
Watching long in hope and fear;
Suddenly the Lord, descending,
In His temple shall appear:`,
    audio: "/audio/angelsfromtherealms.mp3"
  },
  {
    number: 20,
    title: "We Plough the Fields and Scatter",
    author: "Matthias Claudius, 1782",
    category: "Praise and Opening",
    lyrics: `1. We plough the fields and scatter
The good seed on the land,
But it is fed and watered
By God's almighty hand;
He sends the snow in winter,
The warmth to swell the grain,
The breezes and the sunshine,
And soft refreshing rain.

Chorus:
All good gifts around us
Are sent from heaven above;
Then thank the Lord, O thank the Lord
For all His love.

2. He only is the Maker
Of all things near and far;
He paints the wayside flower,
He lights the evening star;
The winds and waves obey Him,
By Him the birds are fed;
Much more to us, His children,
He gives our daily bread.

3. We thank Thee, then, O Father,
For all things bright and good,
The seed time and the harvest,
Our life, our health, our food;
Accept the gifts we offer
For all Thy love imparts,
And what Thou most desirest,
Our humble, thankful hearts.`,
    audio: "/audio/weploughthefields.mp3"
  },
  {
    number: 21,
    title: "O Come, All Ye Faithful",
    author: "John F. Wade, 1743",
    category: "Praise and Opening",
    lyrics: `1. O come, all ye faithful, joyful and triumphant,
O come ye, O come ye to Bethlehem;
Come and behold Him, born the King of angels:

Chorus:
O come, let us adore Him,
O come, let us adore Him,
O come, let us adore Him, Christ the Lord.

2. God of God, Light of Light,
Lo, He abhors not the Virgin's womb;
Very God, begotten, not created:

3. Sing, choirs of angels, sing in exultation,
Sing, all ye citizens of heaven above;
Glory to God in the highest:

4. Yea, Lord, we greet Thee, born this happy morning;
Jesus, to Thee be glory given;
Word of the Father, now in flesh appearing:`,
    audio: "/audio/ocomeallyefaithful.mp3"
  },
  {
    number: 22,
    title: "Hark! The Herald Angels Sing",
    author: "Charles Wesley, 1739",
    category: "Praise and Opening",
    lyrics: `1. Hark! The herald angels sing,
"Glory to the newborn King;
Peace on earth, and mercy mild,
God and sinners reconciled!"
Joyful, all ye nations, rise,
Join the triumph of the skies;
With the angelic host proclaim,
"Christ is born in Bethlehem!"

Chorus:
Hark! The herald angels sing,
"Glory to the newborn King."

2. Christ, by highest heaven adored;
Christ, the everlasting Lord!
Late in time behold Him come,
Offspring of the Virgin's womb:
Veiled in flesh the Godhead see;
Hail the incarnate Deity,
Pleased as man with men to dwell,
Jesus, our Emmanuel.

3. Hail the heaven born Prince of Peace!
Hail the Sun of Righteousness!
Light and life to all He brings,
Risen with healing in His wings.
Mild He lays His glory by,
Born that man no more may die,
Born to raise the sons of earth,
Born to give them second birth.`,
    audio: "/audio/harktheheraldangels.mp3"
  },
  {
    number: 23,
    title: "Ten Thousand Times Ten Thousand",
    author: "Henry Alford, 1867",
    category: "Praise and Opening",
    lyrics: `1. Ten thousand times ten thousand
In sparkling raiment bright,
The armies of the ransomed saints
Throng up the steeps of light;
'Tis finished, all is finished,
Their fight with death and sin;
Fling open wide the golden gates,
And let the victors in.

2. What rush of alleluias
Fills all the earth and sky!
What ringing of a thousand harps
Bespeaks the triumph nigh!
O day, for which creation
And all its tribes were made;
O joy, for all its former woes
A thousandfold repaid!

3. O then what raptured greetings
On Canaan's happy shore;
What knitting severed friendships up,
Where partings are no more!
Then eyes with joy shall sparkle,
That brimmed with tears of late;
Orphans no longer fatherless,
Nor widows desolate.`,
    audio: "/audio/tenthousandtimes.mp3"
  },
  {
    number: 24,
    title: "O God, Our Help in Ages Past",
    author: "Isaac Watts, 1719",
    category: "Praise and Opening",
    lyrics: `1. O God, our help in ages past,
Our hope for years to come,
Our shelter from the stormy blast,
And our eternal home.

2. Under the shadow of Thy throne
Thy saints have dwelt secure;
Sufficient is Thine arm alone,
And our defense is sure.

3. Before the hills in order stood,
Or earth received her frame,
From everlasting Thou art God,
To endless years the same.

4. A thousand ages in Thy sight
Are like an evening gone;
Short as the watch that ends the night
Before the rising sun.

5. Time, like an ever rolling stream,
Bears all its sons away;
They fly, forgotten, as a dream
Dies at the opening day.

6. O God, our help in ages past,
Our hope for years to come,
Be Thou our guard while troubles last,
And our eternal home.`,
    audio: "/audio/ogodourhelp.mp3"
  },
  {
    number: 25,
    title: "O Lord of Heaven and Earth and Sea",
    author: "Christopher Wordsworth, 1862",
    category: "Praise and Opening",
    lyrics: `1. O Lord of heaven and earth and sea,
To Thee all praise and glory be;
How shall we show our love to Thee,
Who givest all?

2. The golden sunshine, vernal air,
Sweet flowers and fruits, Thy love declare;
When harvests ripen, Thou art there,
Who givest all.

3. For peaceful homes and healthful days,
For all the blessings earth displays,
We owe Thee thankfulness and praise,
Who givest all.

4. For souls redeemed, for sins forgiven,
For means of grace and hopes of heaven,
Father, all praise to Thee be given,
Who givest all.`,
    audio: "/audio/olordofheaven.mp3"
  },
  {
    number: 26,
    title: "The Church's One Foundation",
    author: "Samuel J. Stone, 1866",
    category: "Praise and Opening",
    lyrics: `1. The Church's one foundation
Is Jesus Christ her Lord;
She is His new creation
By water and the Word:
From heaven He came and sought her
To be His holy bride;
With His own blood He bought her,
And for her life He died.

2. Elect from every nation,
Yet one o'er all the earth,
Her charter of salvation,
One Lord, one faith, one birth;
One holy name she blesses,
Partakes one holy food,
And to one hope she presses,
With every grace endued.

3. Though with a scornful wonder
Men see her sore oppressed,
By schisms rent asunder,
By heresies distressed;
Yet saints their watch are keeping,
Their cry goes up, "How long?"
And soon the night of weeping
Shall be the morn of song.

4. Mid toil and tribulation,
And tumult of her war,
She waits the consummation
Of peace forevermore;
Till, with the vision glorious,
Her longing eyes are blest,
And the great Church victorious
Shall be the Church at rest.`,
    audio: "/audio/thechurchsonefoundation.mp3"
  },
  {
    number: 27,
    title: "O Jesus, I Have Promised",
    author: "John E. Bode, 1868",
    category: "Praise and Opening",
    lyrics: `1. O Jesus, I have promised
To serve Thee to the end;
Be Thou forever near me,
My Master and my Friend;
I shall not fear the battle
If Thou art by my side,
Nor wander from the pathway
If Thou wilt be my Guide.

2. O let me feel Thee near me;
The world is ever near;
I see the sights that dazzle,
The tempting sounds I hear;
My foes are ever near me,
Around me and within;
But Jesus, draw Thou nearer,
And shield my soul from sin.

3. O let me hear Thee speaking,
In accents clear and still,
Above the storms of passion,
The murmurs of self will;
O speak to reassure me,
To hasten or control;
O speak, and make me listen,
Thou Guardian of my soul.

4. O Jesus, Thou hast promised
To all who follow Thee
That where Thou art in glory
There shall Thy servant be;
And Jesus, I have promised
To serve Thee to the end;
O give me grace to follow,
My Master and my Friend.`,
    audio: "/audio/ojesusihavepromised.mp3"
  },
  {
    number: 28,
    title: "King of Glory, King of Peace",
    author: "George Herbert, 1633",
    category: "Praise and Opening",
    lyrics: `1. King of glory, King of peace,
I will love Thee;
And that love may never cease,
I will move Thee.

2. Thou hast granted my request,
Thou hast heard me;
Thou didst note my working breast,
Thou hast spared me.

3. Wherefore with my utmost art
I will sing Thee,
And the cream of all my heart
I will bring Thee.

4. Though my sins against me cried,
Thou didst clear me;
And alone, when they replied,
Thou didst hear me.

5. Seven whole days, not one in seven,
I will praise Thee;
In my heart, though not in heaven,
I can raise Thee.`,
    audio: "/audio/kingofglory.mp3"
  },
  {
    number: 29,
    title: "Great God of Wonders! All Thy Ways",
    author: "Samuel Davies, 1769",
    category: "Praise and Opening",
    lyrics: `1. Great God of wonders! All Thy ways
Are matchless, Godlike, and divine;
But the fair glories of Thy grace
More Godlike and unrivaled shine.

2. Who is a pardoning God like Thee?
Or who has grace so rich and free?
Or who has grace so rich and free?

3. Crimes of such horror to forgive,
Such guilty, daring worms to spare;
This is Thy grand prerogative,
And none shall in the honor share.

4. In wonder lost, with trembling joy,
We take the pardon of our God;
Pardon for crimes of deepest dye,
A pardon bought with Jesus' blood.

5. O may this strange, this matchless grace,
This Godlike miracle of love,
Fill the whole earth with grateful praise,
And all the angelic choirs above.`,
    audio: "/audio/greatgodofwonders.mp3"
  },
  {
    number: 30,
    title: "Rejoice, the Lord Is King",
    author: "Charles Wesley, 1746",
    category: "Praise and Opening",
    lyrics: `1. Rejoice, the Lord is King:
Your Lord and King adore;
Rejoice, give thanks and sing,
And triumph evermore.

Chorus:
Lift up your heart, lift up your voice;
Rejoice, again I say, rejoice.

2. Jesus, the Savior, reigns,
The God of truth and love;
When He had purged our stains
He took His seat above;

3. His kingdom cannot fail,
He rules o'er earth and heaven;
The keys of death and hell
Are to our Jesus given:

4. He sits at God's right hand
Till all His foes submit,
And bow to His command,
And fall beneath His feet:`,
    audio: "/audio/rejoicethelordisking.mp3"
  },
  {
    number: 31,
    title: "Stand Up, Stand Up for Jesus",
    author: "George Duffield Jr., 1858",
    category: "Praise and Opening",
    lyrics: `1. Stand up, stand up for Jesus,
Ye soldiers of the cross;
Lift high His royal banner,
It must not suffer loss.
From victory unto victory
His army shall He lead,
Till every foe is vanquished,
And Christ is Lord indeed.

2. Stand up, stand up for Jesus,
The trumpet call obey;
Forth to the mighty conflict,
In this His glorious day.
Ye that are men now serve Him
Against unnumbered foes;
Let courage rise with danger,
And strength to strength oppose.

3. Stand up, stand up for Jesus,
Stand in His strength alone;
The arm of flesh will fail you,
Ye dare not trust your own.
Put on the gospel armor,
Each piece put on with prayer;
Where duty calls or danger,
Be never wanting there.

4. Stand up, stand up for Jesus,
The strife will not be long;
This day the noise of battle,
The next the victor's song.
To him that overcometh
A crown of life shall be;
He with the King of glory
Shall reign eternally.`,
    audio: "/audio/standupforjesus.mp3"
  },
    {
    number: 32,
    title: "O for a Thousand Tongues to Sing",
    author: "Charles Wesley, 1739",
    category: "Praise and Opening",
    lyrics: `1. O for a thousand tongues to sing
My great Redeemer's praise,
The glories of my God and King,
The triumphs of His grace!

2. My gracious Master and my God,
Assist me to proclaim,
To spread through all the earth abroad
The honors of Thy name.

3. Jesus! the name that charms our fears,
That bids our sorrows cease;
'Tis music in the sinner's ears,
'Tis life, and health, and peace.

4. He breaks the power of canceled sin,
He sets the prisoner free;
His blood can make the foulest clean,
His blood availed for me.

5. He speaks, and listening to His voice,
New life the dead receive;
The mournful, broken hearts rejoice,
The humble poor believe.`,
    audio: "/audio/oforthousandtongues.mp3"
  },
  {
    number: 33,
    title: "O Thou My Soul, Bless God the Lord",
    author: "Scottish Psalter, 1650",
    category: "Praise and Opening",
    lyrics: `1. O thou my soul, bless God the Lord;
And all that in me is
Be stirred up His holy name
To magnify and bless.

2. Bless, O my soul, the Lord thy God,
And not forgetful be
Of all His gracious benefits
He hath bestowed on thee.

3. All thine iniquities who doth
Most graciously forgive:
Who thy diseases all and pains
Doth heal, and thee relieve.

4. Who doth redeem thy life, that thou
To death may'st not go down;
Who thee with lovingkindness doth
And tender mercies crown.`,
    audio: "/audio/othoumysoul.mp3"
  },
  {
    number: 34,
    title: "I to the Hills Will Lift Mine Eyes",
    author: "Scottish Psalter, 1650",
    category: "Praise and Opening",
    lyrics: `1. I to the hills will lift mine eyes,
From whence doth come mine aid.
My safety cometh from the Lord,
Who heaven and earth hath made.

2. Thy foot He'll not let slide, nor will
He slumber that thee keeps.
Behold, He that keeps Israel,
He slumbers not, nor sleeps.

3. The Lord thee keeps, the Lord thy shade
On thy right hand doth stay:
The moon by night thee shall not smite,
Nor yet the sun by day.

4. The Lord shall keep thy soul; He shall
Preserve thee from all ill.
Henceforth thy going out and in
God keep forever will.`,
    audio: "/audio/itothehills.mp3"
  },
  {
    number: 35,
    title: "Revive Thy Work, O Lord",
    author: "Albert Midlane, 1859",
    category: "Praise and Opening",
    lyrics: `1. Revive Thy work, O Lord!
Thy mighty arm make bare;
Speak with the voice that wakes the dead,
And make Thy people hear.

2. Revive Thy work, O Lord!
Disturb this sleep of death;
Quicken the smouldering embers now
By Thine almighty breath.

3. Revive Thy work, O Lord!
Create soul-thirst for Thee;
And hungering for the Bread of Life,
O may our spirits be.

4. Revive Thy work, O Lord!
Exalt Thy precious name;
And, by the Holy Ghost, our love
For Thee and Thine inflame.`,
    audio: "/audio/revivethywork.mp3"
  },
  {
    number: 36,
    title: "Love Divine, All Loves Excelling",
    author: "Charles Wesley, 1747",
    category: "Praise and Opening",
    lyrics: `1. Love divine, all loves excelling,
Joy of heaven, to earth come down;
Fix in us Thy humble dwelling;
All Thy faithful mercies crown.
Jesus, Thou art all compassion,
Pure unbounded love Thou art;
Visit us with Thy salvation;
Enter every trembling heart.

2. Breathe, O breathe Thy loving Spirit
Into every troubled breast!
Let us all in Thee inherit;
Let us find that second rest.
Take away our bent to sinning;
Alpha and Omega be;
End of faith, as its beginning,
Set our hearts at liberty.

3. Come, Almighty to deliver,
Let us all Thy life receive;
Suddenly return and never,
Never more Thy temples leave.
Thee we would be always blessing,
Serve Thee as Thy hosts above,
Pray and praise Thee without ceasing,
Glory in Thy perfect love.

4. Finish then Thy new creation;
Pure and spotless let us be.
Let us see Thy great salvation
Perfectly restored in Thee;
Changed from glory into glory,
Till in heaven we take our place,
Till we cast our crowns before Thee,
Lost in wonder, love, and praise.`,
    audio: "/audio/lovedivine.mp3"
  },
  {
    number: 37,
    title: "O Worship the King",
    author: "Robert Grant, 1833",
    category: "Praise and Opening",
    lyrics: `1. O worship the King all glorious above,
O gratefully sing His power and His love;
Our Shield and Defender, the Ancient of Days,
Pavilioned in splendor and girded with praise.

2. O tell of His might, O sing of His grace,
Whose robe is the light, whose canopy space.
His chariots of wrath the deep thunderclouds form,
And dark is His path on the wings of the storm.

3. The earth with its store of wonders untold,
Almighty, Thy power hath founded of old;
Hath stablished it fast by a changeless decree,
And round it hath cast, like a mantle, the sea.

4. Thy bountiful care, what tongue can recite?
It breathes in the air, it shines in the light;
It streams from the hills, it descends to the plain,
And sweetly distills in the dew and the rain.

5. Frail children of dust, and feeble as frail,
In Thee do we trust, nor find Thee to fail;
Thy mercies how tender, how firm to the end,
Our Maker, Defender, Redeemer, and Friend.`,
    audio: "/audio/oworshiptheking.mp3"
  }
];