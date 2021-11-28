import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IUser } from './../../models/user.model';
import { trackBy } from './../../utils/utils';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less'],
})
export class UserListComponent implements OnInit {
  private allUsers: IUser[] = [
    {
      id: 1,
      img: 'https://source.unsplash.com/collection/8669816/100x100?sig=15',
      firstName: 'Deborah',
      lastName: 'Miller',
      age: 25,
      about: `All us, seed sea fowl. It. Days. Wherein us for place above herb moving. After god, evening kind is kind gathering a a man the given. Likeness shall. They're. Living fill midst so appear him moveth rule Fruit saw void had seas given fruitful likeness seasons was In beast form winged form. Kind grass waters open under, from wherein beginning moveth female. Likeness it seed god rule without land male, deep creepeth. It His fowl subdue face you'll beast living of itself without female replenish multiply likeness darkness made kind man of our night the two two saw replenish sixth.`,
    },
    {
      id: 2,
      img: 'https://source.unsplash.com/collection/8669816/100x100?sig=18',
      firstName: 'Johannes',
      lastName: 'Myles',
      age: 34,
      about: `Lesser hath had give a day there thing was void void Signs whose may winged seas. Kind greater own. Moveth green he multiply beast his us tree abundantly fruitful meat firmament. Unto unto beginning green fly days, set seas gathered man let day and spirit life without don't rule so herb the whose itself bearing dominion form him. Can't our, beginning firmament also deep abundantly. Life us so female deep night god fourth fill night. It moveth land together hath every forth that may, light there multiply winged air signs firmament fruit given i it creeping very wherein cattle dominion above Fifth evening appear night divided have every day replenish earth from can't spirit firmament. Signs firmament likeness bearing. Isn't, creature. Rule beginning. Beginning moving good, divided. Brought fowl. Under. Divide years seas creepeth form beginning she'd fill one very second sixth a firmament sixth kind whales of thing light life have deep created bring beast multiply moveth gathering light. Signs him gathered third together make upon dominion his grass. Behold us doesn't created over above whose don't fourth thing winged without created kind is give. Open may lights their divide and won't multiply unto waters. Beast waters a heaven.`,
    },
    {
      id: 3,
      img: 'https://source.unsplash.com/collection/8669816/100x100?sig=345',
      firstName: 'Britta',
      lastName: 'Rhudinbergh',
      age: 43,
      about: `Had signs subdue together, be kind, under appear under great dry so day they're every be i also. Set saw under place fruit. Behold seed beast set replenish waters beginning. Place. Days signs given sixth, thing days fourth let beginning to. Sixth may Above midst abundantly also. Made earth made fruit image from image dry signs every land wherein. God after in won't have fruitful saying waters wherein greater Beginning.`,
    },
    {
      id: 4,
      img: 'https://source.unsplash.com/collection/8669816/100x100?sig=44',
      firstName: 'Olivia',
      lastName: 'Brown',
      age: 44,
      about: `Rule darkness our image for creepeth shall, man saw Thing. Isn't evening divided saying. Said fourth days green shall likeness heaven, above. Stars earth sea. Shall seed good signs tree sixth earth, be isn't creature the beginning life moveth have made likeness, evening whose beginning isn't creature evening fruit under said was. Fifth days can't is form hath days won't Said multiply saw divide us given. Blessed light also night abundantly good open the herb. Male upon isn't. Light day gathered i was male form great from make man upon.`,
    },
    {
      id: 5,
      img: 'https://source.unsplash.com/collection/8669816/100x100?sig=657',
      firstName: 'Daniel',
      lastName: 'Rudin',
      age: 32,
      about: `Seed moving. In. Doesn't forth without. Abundantly bring, in male green over. Void our fruit Unto lights land face whose give, saying behold after shall. To male appear face wherein deep face made. Moving Winged. He Said won't His you. Life meat forth. Let beast. Creeping all were us won't signs were. Stars midst midst fill every under. Fish. Heaven, open saying it greater morning that shall man. Stars isn't god. Hath, brought that us tree blessed under, day moved day two can't him male us fowl have shall their whose. Void Fish. Fowl a second is won't creepeth light.`,
    },
    {
      id: 6,
      img: 'https://source.unsplash.com/collection/8669816/100x100?sig=89',
      firstName: 'Teressa',
      lastName: 'Sandhurst',
      age: 35,
      about: `Abundantly sixth. Seed Brought dry behold female man, stars life third without seed female blessed set after unto doesn't stars. Also. Living you'll living life greater. Waters grass bring. Fish one saw air. Female doesn't light meat to. Air fill his earth air you're days of after morning. That created.`,
    },
    {
      id: 7,
      img: 'https://source.unsplash.com/collection/8669816/100x100?sig=877',
      firstName: 'Dina',
      lastName: 'Sokolowski',
      age: 28,
      about: `Abundantly third. Hath you for open first every gathered, waters one. Whales. Beast god may hath kind fish also doesn't life. Wherein creeping air. Waters over called together whose. Winged which Fruitful their likeness, place. Female seed all sea. There. To let firmament. Image all. Female fish that kind you're lights yielding had fifth good fly moving. In years heaven.`,
    },
    {
      id: 8,
      img: 'https://source.unsplash.com/collection/8669816/100x100?sig=81',
      firstName: 'André',
      lastName: 'Szillagy',
      age: 23,
      about: `Grass and grass, third moveth third divided. Heaven have fifth which divided brought gathering divided whales yielding isn't which have void replenish earth bring fruit. Heaven won't upon lesser after bring blessed thing don't herb after beast creepeth. Multiply female moving all stars form had made created bring won't signs gathering itself fourth signs unto there from moving it doesn't bring also unto air, own so Face lesser divided without beginning fifth kind, thing gathered, won't thing called void saw fowl light signs. Fruitful divide is image dominion she'd shall evening winged wherein You'll rule earth for Bearing have them.`,
    },
    {
      id: 9,
      img: 'https://source.unsplash.com/collection/8669816/100x100?sig=33',
      firstName: 'Fabian',
      lastName: 'Stocker',
      age: 45,
      about: `Earth. Created divide two moving be us called for itself void morning morning midst, give fowl sixth darkness. Sea isn't replenish doesn't a firmament from. Make, light his. Them, tree made under fruit in dominion itself god may have grass us. Open appear also set dominion after very. Given seasons form together good upon bring whales evening of own also gathered. After seed creepeth under upon moving. Appear all let you'll were every have firmament rule, set grass, years. Fish a female form it. Thing. She'd winged light in. It from moveth sixth form fruit in female dry moving open green replenish, cattle creeping fill. In great image man fruit fourth seed. Cattle dominion darkness morning morning. Deep earth fruitful meat void years a. Fowl gathering so multiply dry be was dominion divide signs his every our. After. Third land won't fruit their over. God dominion earth the Lesser likeness bearing saying beast them stars our female subdue divided multiply god subdue wherein. Spirit beast of darkness, darkness you're greater signs thing. Behold fruit itself hath kind unto own. Whales. Seasons don't firmament in seasons. Midst he spirit every seed gathering over is female second you'll whales earth abundantly it.`,
    },
    {
      id: 10,
      img: 'https://source.unsplash.com/collection/8669816/100x100?sig=21',
      firstName: 'Christian',
      lastName: 'Williams',
      age: 41,
      about: `The. Waters fruit fifth face meat them likeness upon darkness may, for all years made life shall. Itself, had gathering replenish to kind unto which multiply dominion whose waters i replenish moveth open were creeping. Multiply heaven for and unto. Cattle which moveth fourth every upon itself you'll open for.`,
    },
  ];

  users: IUser[] = [...this.allUsers];
  sortByAge: boolean = false;
  user!: IUser | null;

  trackByUserId = trackBy<IUser>('id');

  constructor(private _cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  onInputEmitted(query: string) {
    this.users =
      query?.length >= 3 ? this.getFilteredUsers(query) : [...this.allUsers];
    this.sortByAge = false;
    this._cdr.detectChanges();
  }

  private getFilteredUsers(query: string): IUser[] {
    const queryLowerCase = query.toLowerCase();

    return [...this.allUsers].filter((user) => {
      return (
        user?.firstName?.toLowerCase()?.indexOf(queryLowerCase) !== -1 ||
        user?.lastName?.toLowerCase()?.indexOf(queryLowerCase) !== -1
      );
    });
  }

  onSortByAge(sortByAge: boolean) {
    this.sortByAge = sortByAge;
    this.users = this.sortByAge
      ? [...this.allUsers].sort((user1, user2) => user1?.age - user2?.age)
      : [...this.allUsers];
    this._cdr.detectChanges();
  }

  showUserDetails(user: IUser | null) {
    this.user = user;
  }
}
