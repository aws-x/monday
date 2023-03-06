var body = `You received a new message from your online store's contact form.

Country Code:
FR

Name:
Maxence

Lastname:
Lemoigne Brebion

Company:
Aurélie Bidermann

Function:
Responsable E-commerce et CRM

Phone:
0633913843

Email:
maxence.lemoigne-brebion@aureliebidermann.com

Skills:
besoins-ponctuels, besoins-long-terme

Range:
10000€-16000€

Deadline:
moins de 30 jours

Body:
Bonjour,

J'espère que vous allez bien !

je me permet de vous contacter en tant que Responsable E-commerce
et CRM de la marque de joaillerie et haute-fantaisie Aurélie
Bidermann, nous souhaitons effectuer une migrer notre site vers
un autre hébergeur et effectuer s'il est nécessaire la montée en
version de notre Magento. (Actuellement version 2.2.6)

Pourriez-vous me recontacter afin que nous puissions en discuter,

Bien à vous,
Maxence Lemoigne Brebion.`;
var regExp = /(?<name>Name:[*]?[\r\n]+([^\r\n]+).*Lastname)/gm;

    //(?<name>Name:[*]?[\r\n]+([^\r\n]+).*Lastname:[*]?[\r\n]+([^\r\n]+).*Company:[*]?[\r\n]+([^\r\n]+).*Phone:[*]?[\r\n]+([^\r\n]+).*Email:[*]?[\r\n]+([^\r\n]+))


var matches = body.match(regExp) 
console.log(`message:`, { matches });

