const quotes = [
  {
    id: 1,
    book: 'Giường đơn hay giường đôi',
    author: 'Cầm Sắt Tỳ Bà',
    content: [
      'Rất nhiều cô gái được khuyên lấy người yêu mình sẽ hạnh phúc hơn lấy người mình yêu. Nhưng thực ra chẳng phải, hạnh phúc không nằm ở người mình yêu hay người yêu mình. Hạnh phúc là ở trong lòng bàn tay, biết nắm lấy hay không lại là chuyện khác.',
    ],
  },
  {
    id: 2,
    book: 'Thương ly',
    author: 'Tuyết Linh Chi',
    content: [
      'Gặp đúng người, đúng thời điểm là ạnh phúc. Gặp đúng người, sai thời điểm là bi thương. Gặp sai người, đúng thời điểm là bất lực. Gặp sai người, sai thời điểm là thê lương.',
    ],
  },
  {
    id: 4,
    book: 'Này chớ làm loạn',
    author: 'Minh Nguyệt Thính Phong',
    content: [
      'Cho nên em thấy không, đối với những chuyện không như ý, em hãy mỉm cười, vừa cười vừa thầm khinh bỉ nó, em cứ kiên trì nụ cười, cuối cùng người thắng chính là em.',
    ],
  },
  {
    id: 5,
    book: 'Cớ Sao mãi yêu em',
    author: 'Tâm Văn',
    content: [
      'Trên thế gian này khoảng cách xa xôi nhất, không phải giữa sự sống và cái chết mà chính là, tôi đứng ngay trước mặt em nhưng em lại không biết rằng tôi yêu em!',
    ],
  },
  {
    id: 6,
    book: 'Yêu em từ cái nhìn đầu tiên',
    author: 'Cố Mạn',
    content: ['Nếu như anh biết có một ngày anh yêu em đến nhường này. Anh nhất định sẽ yêu em từ cái nhìn đầu tiên.'],
  },
  {
    id: 7,
    book: 'Tháng sáu trời xanh lam',
    author: 'Tâm Văn',
    content: [
      'Được gặp một người có duyên với mình trong thời điểm thích hợp, là hạnh phúc, của cả cuộc đời. Được gặp một người có duyên với mình trong thời điểm không thích hợp, chỉ là một tiếng thở dài. Cách yêu một con nhím, không phải là nhổ hết gai trên người nó, mà là phải học được cách làm thế nào để tìm được một cự ly thích hợp, có thể sưởi ấm cho nhau nhưng lại không bị đối thương đâm gai vào mình.',
    ],
  },
  {
    id: 8,
    book: 'Mãi mãi là bao xa',
    author: 'Diệp Lạc Vô Tâm',
    content: ['Cuộc đời của anh vốn là một đường thẳng chỉ vì gặp em mà rẽ ngang'],
  },
  {
    id: 9,
    book: 'Anh có thích nước Mỹ không',
    author: 'Tân Dĩ Ổ',
    content: ['Ai yêu trước, người ấy sẽ thua'],
  },
  {
    id: 28,
    book: 'Anh có thích nước Mỹ không',
    author: 'Tân Dĩ Ổ',
    content: ['…Có bao nhiêu tình yêu để có thể chịu đựng những cái buông tay hết lần này đến lần khác….'],
  },
  {
    id: 29,
    book: 'Anh có thích nước Mỹ không',
    author: 'Tân Dĩ Ổ',
    content: [
      'Vi Vi, đến một ngày nào đó em sẽ hiểu, con người ai cũng phải yêu mình trước. Anh không thể yêu em với hai bàn tay trắng',
    ],
  },
  {
    id: 30,
    book: 'Anh có thích nước Mỹ không',
    author: 'Tân Dĩ Ổ',
    content: [
      'Giống như cố hương là nơi con người ôn lại thuở hàn vi, tuổi xuân là quãng thời gian để con người nhớ nhung, hoài niệm. Khi bạn ôm nó vào lòng nó sẽ chẳng đáng một xu, chỉ khi bạn dốc hết nó, quay đầu nhìn lại, tất cả mới có ý nghĩa. Những người đã từng yêu và làm tổn thương chúng ta, đều có ý nghĩa đối với sự tồn tại tuổi xuân chúng ta.',
    ],
  },
  {
    id: 31,
    book: 'Anh có thích nước Mỹ không',
    author: 'Tân Dĩ Ổ',
    content: [
      'Anh đối xử với cô không bằng cô đối xử với anh, đó cũng có thể là do tình yêu anh dành cho cô không nhiều như cô dành cho anh, nhưng xét cho cùng tình yêu không phải là buôn bán, làm sao có thể đòi hỏi sự công bằng tuyệt đối, nếu nhất thiết pải có một người yêu nhiều hơn, thì đó là cô cũng chẳng sao. Nếu cô bỏ ra mười phần, anh chỉ đáp lại năm phần, thế thì cô cho anh hai mươi phần, không phải anh sẽ trả cô mười phần đó sao?',
    ],
  },
  {
    id: 33,
    book: 'Anh có thích nước Mỹ không',
    author: 'Tân Dĩ Ổ',
    content: [
      'Hiện thực chính là những điều tàn nhẫn như vậy đấy, nó luôn luôn hủy diệt niềm tin của bạn trong lúc bạn không hề hay biết, hủy diệt những lời hứa mà bạn tưởng rằng bạn có thể thực hiện',
    ],
  },
  {
    id: 34,
    book: 'Anh có thích nước Mỹ không',
    author: 'Tân Dĩ Ổ',
    content: [
      'Chính cô là người quyết định yêu, không ai ép cô, thế nên chỉ cần dồn mọi tâm huyết để yêu, không phải lúc ở bên anh cô cũng thấy vui đó sao? Tuổi xuân có hạn, điều này không sai, nhưng cô càng không thể phí hoài tuổi xuân trong sự do dự và chờ đợi. Vì cô không biết vài năm nữa, cô có còn được trẻ trung đáng yêu như bây giờ hay không, có còn can đảm bất chấp tất cả như hiện tại hay không? Vậy thì tạo sao không tranh thủ hiện tại, tranh thủ lúc cô vẫn còn đang có những cái cần có để yêu hết mình?',
    ],
  },
  {
    id: 35,
    book: 'Anh có thích nước Mỹ không',
    author: 'Tân Dĩ Ổ',
    content: [
      '…Con gái là gì cũng không quan trọng, chỉ sợ gặp phải hoàng tử hành tây trong truyền thuyết thôi. Cậu muốn nhìn thấy trái tim chàng, chỉ còn cách là bóc hết lớp áo này đến lớp áo khác, chảy nước mắt; cuối cùng cậu mới biết rằng, hóa ra hành tây không hề có trái tim',
    ],
  },
  {
    id: 36,
    book: 'Anh có thích nước Mỹ không',
    author: 'Tân Dĩ Ổ',
    content: ['Tớ không khóc, tớ sẵn sàng đánh cược, chấp nhận chịu thua'],
  },
  {
    id: 37,
    book: 'Anh có thích nước Mỹ không',
    author: 'Tân Dĩ Ổ',
    content: [
      'Tình yêu là ngọn lửa khiến con người phải liều mình, cho dù là người thông minh hay ngốc nghếch, đã yêu rồi, đều biến thành con thiêu thân. Ai cũng biết xông vào lửa sẽ biến thành tro bụi, nhưng biết làm thế nào, trăm năm sau, cho dù đã từng bốc cháy hay không, chúng ta đều biến thành cát bụi.',
    ],
  },
  {
    id: 38,
    book: 'Anh có thích nước Mỹ không',
    author: 'Tân Dĩ Ổ',
    content: [
      'Tình cảm không phải là cái vòi nước, nói mở là mở, nói đóng là đóng. Cô đã sống hết mình cho mối tình đó mà không giữ lại điều gì. Nhưng anh đã ra đi bất ngờ trong lúc cô hạnh phúc nhất, giữa chừng không có cãi nhau, không có chiến tranh lạnh, không cho cô cơ hội dừng lại, để nhiệt tình vơi bớt, giống như một bài hát, hát đến đoạn hay nhất, bất ngờ phải dừng lại.',
    ],
  },
  {
    id: 39,
    book: 'Anh có thích nước Mỹ không',
    author: 'Tân Dĩ Ổ',
    content: [
      'Khi yêu, tưởng rằng người đó là cả cuộc đời của mình, ai ngờ vừa tỉnh giấc mộng, đã đứng bên cạnh một người khác.',
    ],
  },
  {
    id: 40,
    book: 'Anh có thích nước Mỹ không',
    author: 'Tân Dĩ Ổ',
    content: [
      'Một thời chúng ta tưởng rằng mình có thể chết vì tình yêu, thực ra tình yêu không thể làm con người ta chết, nó chỉ có thể châm một mũi kim vào chỗ đau nhất, rồi chúng ta muốn khóc mà không thể có nước mắt, chúng ta trằn trọc trăn trở, chúng ta trở nên lão luyện, chúng ta trở nên rắn rỏi. Anh không phải là gió, em cũng không phải là cát, dù quấn quýt thế nào cũng không thể đến được chân trời, lau khô nước mắt, sáng mai chúng ta đều phải đi làm.',
    ],
  },
  {
    id: 41,
    book: 'Anh có thích nước Mỹ không',
    author: 'Tân Dĩ Ổ',
    content: [
      'Giống như trái tim của chúng ta, một thời rộn ràng trong ngực, nóng bỏng đến mức không lúc nào yên, sốt sắng muốn đi tìm người chia sẻ, chưa bao giờ nghĩ rằng một ngày nào đó nó sẽ lạnh giá, lạnh giá đến mức chúng ta phải khép chặt mình, rụt rè cảnh giác, chỉ sợ không giữ được hơi ấm mong manh còn sót lại.',
    ],
  },
  {
    id: 42,
    book: 'Anh có thích nước Mỹ không',
    author: 'Tân Dĩ Ổ',
    content: [
      'Trong kẽ hở của thời gian và hiện thực, tuổi xuân cũng như sắc đẹp, mỏng manh như trang giấy bị gió hong khô.',
    ],
  },
  {
    id: 43,
    book: 'Anh có thích nước Mỹ không',
    author: 'Tân Dĩ Ổ',
    content: [
      'Tình yêu của Hà Lục Nha tựa con suối nhỏ, róc rách đêm ngày, cuối cùng suối chảy về sông, và những mối tình với những sóng nước mênh mông lại không bền vững như nó. Nguyễn Nguyễn nói đúng, từ trước đến nay, sự hy sinh của con người trong tình yêu không tỷ lệ thuận với niềm hạnh phúc mà họ giành được, người càng muốn yêu lại càng không được yêu.',
    ],
  },
  {
    id: 44,
    book: 'Anh có thích nước Mỹ không',
    author: 'Tân Dĩ Ổ',
    content: [
      'Trong cuộc đời có thể chúng ta gặp rất nhiều người, có lúc là người đi cùng một đoạn đường, mãi cho đến khi chũng ta gặp được người mà chúng ta thực sự muốn cùng chung sống suốt đời, mới giao toàn bộ chặng đường còn lại cho người đó, cùng nhau đi hết cuộc đời',
    ],
  },
  {
    id: 45,
    book: 'Anh có thích nước Mỹ không',
    author: 'Tân Dĩ Ổ',
    content: [
      'Cuộc đời dài như vậy, ngày nào chưa đi đến điểm cuối thì anh chưa thế biết ai là người đi cùng anh đến hết cuộc đời. Có lúc anh gặp một người, tưởng cô ấy chính là người đó, quay đầu nhìn lại, thực ra cô ấy cũng chỉ là người đem lại cho anh những cái mà anh cần trong một quãng đường mà thôi.',
    ],
  },
  {
    id: 46,
    book: 'Anh có thích nước Mỹ không',
    author: 'Tân Dĩ Ổ',
    content: [
      'Anh từng thử quên em, anh tưởng thời gian có thể xoá nhoà tất cả. Ba trăm ngày giày vò đã khiến anh hiểu ra rằng: Điều gì anh cũng đều làm được, ngoại trừ...quên em.',
    ],
  },
  {
    id: 47,
    book: 'Anh có thích nước Mỹ không',
    author: 'Tân Dĩ Ổ',
    content: [
      'Câu hỏi cuối cùng – anh yêu em không? Đây là câu hỏi ngu xuẩn nhất thế gian, cũng là câu hỏi mà phụ nữ trên toàn thế giới thích tra hỏi nhất. Đàn ông thường chê phụ nữ lãng nhách, thực ra phụ nữ cũng biết câu hỏi này là ngốc nghếch, nhưng họ vẫn muốn đi tìm đáp án hết lần này đến lần khác. Vì sao? Bởi vì mỗi người một suy nghĩ, bởi vì phụ nữ rất quan tâm, bởi vì họ không tìm thấy đủ cảm giác an toàn mà trái tim khác đem lại cho họ. Mặc dù câu trả lời mà người đàn ông đưa ra phần lớn đều hư vô, nhưng họ cần khoảnh khắc an ủi đó.',
    ],
  },
  {
    id: 48,
    book: 'Anh có thích nước Mỹ không',
    author: 'Tân Dĩ Ổ',
    content: [
      'Đối với đàn ông, sự nghiệp rất quan trọng, nhưng trong trái tim bọn anh có một số cái cũng cần được giữ gìn cẩn thận. Anh đã từng nói, anh không phải là con người toàn vẹn, nhưng chắc chắn cũng không phải là người hèn hạ đến mức lợi dụng tình cảm của phụ nữ để đạt được mục đích của mình. Vi Vi, bảy năm trước anh thấy ra đi là sự lựa chọn tốt nhất, nhưng vẫn cảm thấy hối hận, và sự hối hận này ngày càng rõ nét mỗi khi nhìn thấy em hoặc được nghe thấy tin tức của em. Anh mong muốn người sẽ sống cùng với anh suốt đời là em, nếu đây không phải là tình yêu thì anh không biết tình yêu là gì. Anh không dám nói những lời như có thể sống chết vì em, nhưng chỉ cần anh ở bên em, anh sẽ cố gắng bằng mọi khả năng của mình, sẽ làm cho em hạnh phúc, bảo vệ em thật chu toàn.',
    ],
  },
  {
    id: 10,
    book: 'Từng thề ước',
    author: 'Đồng Hoa',
    content: [
      'Trải qua bấy nhiêu chuyện, ta mới phát hiện chết thực ra rất dễ dàng, sống mới là khó khăn. Có thể sống đến cuối cùng mới là khó nhất.',
    ],
  },
  {
    id: 11,
    book: 'Cho anh nhìn về phía em',
    author: 'Tân Dĩ Ổ',
    content: ['Trên đời này có hai thứ không thể nắm giữ, một là chuyện cũ, một là mưa hoa bay.'],
  },
  {
    id: 12,
    book: 'Đồng Lang Cộng Hôn',
    author: 'Diệp Lạc Vô Tâm',
    content: [
      'Một người đàn ông hấp dẫn nhất không phải là lúc hắn chân thành nói câu “Anh yêu em” mà là lúc hắn nói về chí hướng của mình, kiên định cùng cố chấp.',
    ],
  },
  {
    id: 13,
    book: 'Cô đơn vào đời',
    author: 'Dịch Phấn Hàn',
    content: [
      'Cũng bắt đầu từ ngày hôm đó, ánh mắt của tôi không còn dịu dàng nữa, không còn ngây thơ nữa, không còn trong sáng nữa. Ánh mắt của tôi đã vĩnh viễn từ biệt thời thiếu nữ. Ánh mắt của tôi đã học đươc cách biết hoài nghi, biết lạnh lùng, biết mưu sát. Ánh mắt của tôi hiểu được sự lạnh lẽo, hiểu được sự lừa dối và hiểu được những thứ bẩn thỉu.',
    ],
  },
  {
    id: 91,
    book: 'Cô đơn vào đời',
    author: 'Dịch Phấn Hàn',
    content: [
      'Sẽ luôn có một người phải nhận thua cuộc, sẽ luôn có một người yêu người còn lại nhiều hơn một chút mới có thể đọ sức được với nhau. Tình yêu là một cuộc đọ sức vô hình. Mà những người như chúng ta chỉ nhìn thấy được những sự ấm áp và ngọt ngào.',
    ],
  },
  {
    id: 14,
    book: 'Sắc màu ấm',
    author: 'Phong Tử Tam Tam',
    content: [
      'Cô đơn quá lâu, con người sẽ sinh ra tâm lý kỳ lạ, luôn luôn sinh ra cảm giác thân thiết với người tỏ ra lo lắng cho mình.',
    ],
  },
  {
    id: 15,
    book: 'Ai hiểu được lòng em?',
    author: 'Lục Xu',
    content: [
      'Có rất nhiều chuyện có thể giữ ở trong tim nhưng không thể nói ra, mà đã là chuyện không thể nói ra lời thì vĩnh viễn sẽ không quên đi được.',
    ],
  },
  {
    id: 49,
    book: 'Ai hiểu được lòng em?',
    author: 'Lục Xu',
    content: [
      'Em sẽ không chờ đợi một người, nếu có một ngày hắn khiến em chết tâm, em nhất định sẽ tìm kiếm người khác thay thế. Em không phải người si tình, cũng sẽ không biểu diễn vai si tình. Tại sao người ta lại phải làm khổ chính mình?',
    ],
  },
  {
    id: 50,
    book: 'Ai hiểu được lòng em?',
    author: 'Lục Xu',
    content: [
      'Những gì em làm, em sẽ chịu trách nhiệm, vĩnh viễn sẽ không để bản thân mình làm tổn thương người khác. Nếu một ngày nào đó em tổn thương, nếu biết trước không có kết quả, em sẽ lựa chọn rời xa. Em chính là như thế.',
    ],
  },
  {
    id: 16,
    book: 'Thời niên thiếu không thể quay lại ấy',
    author: 'Đồng Hoa',
    content: ['Em là em, độc nhất vô nhị, không cần so sánh với bất kì ai khác.'],
  },
  {
    id: 17,
    book: 'Hôn nhân không tình yêu',
    author: 'Diệp Lạc Vô Tâm',
    content: [
      'Có những tình yêu, lúc yêu thì rầm rầm rộ rộ, gắn bó keo sơn, nhưng đến lúc hạ màn, trong lòng chẳng lưu lại vết tích, cùng lắm trở thành câu chuyện cười của buổi trà dư tửu hậu. Có những tình yêu, lúc yêu hết sức nhẹ nhàng, tĩnh lặng như nước, nhưng sau khi chia tay sẽ trở thành nỗi đau không thể xóa nhòa, dù không chạm vào cũng nhói buốt trong lòng.',
    ],
  },
  {
    id: 18,
    book: 'Bảy năm vẫn ngoảnh về phương bắc',
    author: 'Ân Tầm',
    content: [
      'Nếu tôi đã thích thì vì sao lại không được? Tôi không cần cô ấy quá xinh đẹp vì một khi để người đàn ông khác chú ý tới tôi sẽ ghen. Cô ấy có thể không thông minh vì chỉ cần tôi thông minh là được. Cô ấy có thể không xuất sắc, vì tôi có thể xuất sắc. Cô ấy có thể không biết chăm sóc người khác, thậm chí là không biết chăm sóc bản thân mình cũng không sao, vì tôi có thể chăm sóc cô ấy',
    ],
  },
  {
    id: 19,
    book: 'Nụ hôn của sói',
    author: 'Diệp Lạc Vô Tâm',
    content: [
      'Anh tuy có chút hư hỏng, nhưng bản tính lương thiện. Mặt mũi tuy không ưa nhìn, nhưng nội tâm phong phú. Dù sao em cũng chưa có bạn trai, vậy tạm chấp nhận anh đi.',
    ],
  },
  {
    id: 89,
    book: 'Nụ hôn của sói',
    author: 'Diệp Lạc Vô Tâm',
    content: [
      'Yêu chính là: xoay người, để nước mắt rơi xuống trong đêm tối nơi em không nhìn thấy. Còn dưới ánh mặt trời, em nhìn thấy, là nụ cười hăng hái của anh.',
    ],
  },
  {
    id: 90,
    book: 'Nụ hôn của sói',
    author: 'Diệp Lạc Vô Tâm',
    content: [
      'Cùng em ăn cơm, cùng em ngủ, cùng em cười, cùng em dạo phố, mở mắt có thể thấy, nhắm mắt có thể ôm...là khát vọng lớn nhất trong cuộc sống của anh.',
    ],
  },
  {
    id: 50,
    book: 'Ngủ cùng sói',
    author: 'Diệp Lạc Vô Tâm',
    content: ['Sau bao sóng gió, sau bao thăng trầm, tôi chỉ còn một giấc mộng duy nhất, là em.'],
  },
  {
    id: 51,
    book: 'Ngủ cùng sói',
    author: 'Diệp Lạc Vô Tâm',
    content: [
      'Tôi có thể cho em thời gian tiếp nhận tình cảm của tôi đối với em, bao lâu cũng được, vì em là của tôi.',
    ],
  },
  {
    id: 52,
    book: 'Ngủ cùng sói',
    author: 'Diệp Lạc Vô Tâm',
    content: [
      ,
      'Bởi vì yêu em không có gì sai cả. Theo đuổi em là tự do của anh. Ngoài em ra, không ai có tư cách nói: không được.',
    ],
  },
  {
    id: 21,
    book: 'Hào Môn Kinh Mộng',
    author: 'Ân Tầm',
    content: [
      'Anh không muốn khoe khoang có bao nhiêu người phụ nữ khao khát được bước chân vào thế giới của anh. Anh chỉ muốn nói, anh đã chuẩn bị cả thế giới của mình dành cho một người con gái duy nhất.',
    ],
  },
  {
    id: 53,
    book: 'Hào Môn Kinh Mộng',
    author: 'Ân Tầm',
    content: [
      'Nếu em cho phép tôi đứng trước mặt em, tôi có thể che chắn cho em tránh khỏi bão tố quét qua cuộc đời. Tôi chỉ muốn biết, em có muốn chấp nhận sự ích kỉ này của tôi không? ',
    ],
  },
  {
    id: 22,
    book: 'Hãy nhắm mắt khi anh đến',
    author: 'Đinh Mặc',
    content: ['Anh yêu em, bằng cả sinh mệnh và trí tuệ của anh. '],
  },
  {
    id: 23,
    book: 'Từng có một người yêu tôi như sinh mệnh',
    author: 'Thư Nghi',
    content: ['Cô bé của tôi, chúc em một đời bình an vui vẻ.'],
  },
  {
    id: 24,
    book: 'Nếu Không Là Tình Yêu',
    author: 'Diệp Lạc Vô Tâm',
    content: [
      'Nếu anh thật lòng yêu một người con gái, anh sẽ không bao giờ để cô ấy đi, càng không có chuyện cưới người con gái khác, bất kể vì lí do gì?',
    ],
  },
  {
    id: 87,
    book: 'Nếu Không Là Tình Yêu',
    author: 'Diệp Lạc Vô Tâm',
    content: [
      'Ngoài em ra, tất cả những thứ khác đối với anh đều không quan trọng. Dù một ngày nào đó anh trắng tay, chỉ cần có em bên cạnh anh là đủ. ',
    ],
  },
  {
    id: 25,
    book: 'Hôn Trộm 55 Lần',
    author: 'Diệp Phi Dạ',
    content: ['Em biết không? Chỉ một nụ cười lơ đãng của em liền khiến cho thế giới của tôi trở nên ấm áp.'],
  },
  {
    id: 55,
    book: 'Tôi là Bêto',
    author: 'Nguyễn Nhật Ánh',
    content: [
      'Con người ta có thể sống bằng nhiều cách Và cũng có thể chết bằng nhiều cách Có những người chết ngay lúc còn đang sống. Tôi không thấy có lý do gì để nghĩ đến lão dù là nghĩ đến để căm giận hay ghét bỏ. Nếu ai đó còn xứng đáng để bạn nuôi nấng sự căm ghét, người đó vẫn còn giá trị trong mắt bạn. Nói cách khác, lão đã trượt khỏi cuộc sống của tôi.',
    ],
  },
  {
    id: 56,
    book: 'Tôi là Bêto',
    author: 'Nguyễn Nhật Ánh',
    content: ['Khi bạn không làm được điều bạn muốn làm, có lẽ bạn cũng cảm thấy tự do bị tước đoạt.'],
  },
  {
    id: 57,
    book: 'Tôi là Bêto',
    author: 'Nguyễn Nhật Ánh',
    content: ['Càng lớn tuổi, con người ta càng nói ít đi. Họ nghĩ nhiều hơn.'],
  },
  {
    id: 58,
    book: 'Tôi là Bêto',
    author: 'Nguyễn Nhật Ánh',
    content: [
      'Khi bạn quá tin cậy hoặc sùng bái một ai, chắc chắn bạn không bao giờ đề phòng, thậm chí nghi ngờ. Và đôi khi bạn chết vì niềm tin ngây thơ của mình.',
    ],
  },
  {
    id: 59,
    book: 'Tôi là Bêto',
    author: 'Nguyễn Nhật Ánh',
    content: ['Khóc, đôi khi là một kiểu cười. Và ngược lại.'],
  },
  {
    id: 27,
    book: 'Thiếu nữ đánh cờ vây',
    author: 'Sơn Táp',
    content: [
      'Tôi chết đi được vì thèm khát được ôm em vào lòng! Nếu như không được, vòng tay quanh vai em, kéo đầu em ngả xuống ngực mình, tôi cũng sẽ cảm thấy vô cùng hạnh phúc nếu được chạm vào các ngón tay em. Tôi đưa mắt nhìn em, sẵn sàng lao như thiêu thân vào lửa…',
    ],
  },
  {
    id: 60,
    book: '',
    author: 'Nelson Mandela',
    content: ['Người chiến thắng là người biết ước mơ và không bao giờ bỏ cuộc'],
  },
  {
    id: 71,
    book: '',
    author: 'Nelson Mandela',
    content: ['Dẫn đầu từ phía sau, và để cho những người khác tin rằng họ đang dẫn đầu.'],
  },
  {
    id: 72,
    book: '',
    author: 'Nelson Mandela',
    content: ['Mọi việc đều tưởng chừng như bất khả thi cho đến khi nó được hoàn thành'],
  },
  {
    id: 73,
    book: '',
    author: 'Nelson Mandela',
    content: [
      'Tôi đã học hỏi được rằng sự dũng cảm không thể không đi kèm nỗi sợ hãi, nhưng sự chiến thắng sẽ vượt qua điều đó. Một chiến binh can đảm không phải là người không cảm thấy sợ hãi, mà đó là người có thể chinh phục được nỗi sợ đó.',
    ],
  },
  {
    id: 74,
    book: '',
    author: 'Nelson Mandela',
    content: [
      'Không ai sinh ra đã có lòng thù hằn với người khác bởi màu da, địa vị hoặc tôn giáo. Điều đó được hình thành qua giáo dục, và nếu họ có thể học thù ghét, thì họ cũng có thể học yêu thương. Tình yêu thì luôn tìm đến trái tim một cách tự nhiên hơn là thù hận.',
    ],
  },
  {
    id: 75,
    book: '',
    author: 'Nelson Mandela',
    content: ['Sự oán giận giống như tự mình uống thuốc độc mà hy vọng kẻ thù của mình chết vậy.'],
  },
  {
    id: 76,
    book: '',
    author: 'Nelson Mandela',
    content: ['Một cái đầu thông minh và một trái tim ấm áp luôn là một sự kết hợp có sức mạnh kinh hoàng.'],
  },
  {
    id: 61,
    book: '',
    author: 'Yasser Arafat',
    content: [
      'Tôi đến đây mang theo cành ô-liu của hòa bình và khẩu súng của người chiến sỹ đấu tranh vì tự do. Xin đừng để cành ô-liu rơi khỏi tay tôi',
    ],
  },
  {
    id: 62,
    book: '',
    author: 'Adolf Hitler',
    content: ['Khi bạn nói dối đủ lớn và đủ nhiều thì đó là sự thật.'],
  },
  {
    id: 66,
    book: '',
    author: 'Adolf Hitler',
    content: ['Thành công là thẩm phán trần thế duy nhất của sự đúng sai.'],
  },
  {
    id: 67,
    book: '',
    author: 'Adolf Hitler',
    content: ['Tôi chỉ chiến đấu vì cái tôi yêu, chỉ yêu những gì tôi tôn trọng, và chỉ tôn trọng những gì tôi biết.'],
  },
  {
    id: 68,
    book: '',
    author: 'Adolf Hitler',
    content: [
      'Khi ngươi giành chiến thắng, ngươi không cần giải thích! Nếu ngươi thua, người không nên có mặt ở đây để giải trình!',
    ],
  },
  {
    id: 69,
    book: '',
    author: 'Adolf Hitler',
    content: [
      'Hãy suy nghĩ 1000 lần trước khi quyết định. Sau khi quyết định, không bao giờ quay lại ngay cả khi gặp 1000 khó khăn',
    ],
  },
  {
    id: 70,
    book: '',
    author: 'Adolf Hitler',
    content: ['Đừng so sánh mình với người khác. Nếu làm như vậy, ngươi đang xúc phạm chính mình.'],
  },
  {
    id: 63,
    book: '',
    author: 'Fidel Castro',
    content: ['Nếu xuất phát tôi sẽ đến đích, nếu đến đích, tôi sẽ chiến đâu, nếu chiến đấu tôi sẽ chiến thắng'],
  },
  {
    id: 64,
    book: '',
    author: 'Fidel Castro',
    content: ['Cách mạng không phải là giường trải hoa hồng. Cách mạng là đấu tranh giữa tương lai và quá khứ'],
  },
  {
    id: 65,
    book: '',
    author: 'Fidel Castro',
    content: [
      'Tôi thực sự hạnh phúc khi sống tới tuổi 80. Tôi chưa bao giờ mong vậy, nhất là khi có một anh hàng xóm, một cường quốc lớn nhất thế giới tìm cách giết tôi hàng ngày',
    ],
  },
  {
    id: 77,
    book: '',
    author: 'Bao la vùng trời - Phần 2',
    content: [
      'Để anh dạy cho em một đạo lý đơn giản... Tình yêu thật ra giống như là tuyết vậy, rất là đẹp nhưng mà tan chảy rất nhanh. Nhưng tình bạn thì lại khác. Tình bạn giống như là đất, nó có thể khiến cho cây non trưởng thành, cho đến một ngày lớn biến thành một khu rùng, trải qua mấy trăm năm, mấy nghìn năm cũng không sụp đổ được. ( Cố Hạ Dương - tập 23)',
    ],
  },
  {
    id: 78,
    book: '',
    author: 'Hạnh phúc trở về',
    content: [
      'Bởi vì anh yêu em, anh yêu em. Anh không muốn nhìn em bị ấm ức, càng không muốn em rõ ràng thích anh mà cố gắng che đậy. Em đừng dày vò mình nữa được không? (Hàn Minh - Tập 11)',
    ],
  },
  {
    id: 79,
    author: 'Bác sĩ khoa sản',
    content: [
      'Cuộc sống vốn dĩ có nhiều bất ngờ và bất trắc không ai ngờ tới. Chúng tôi không đoán trước được kết quả, cũng không thấy trước được tương lai. Vậy hãy để chúng tôi lắng nghe hiện tại vì sự thật sẽ tồn tại mãi và chúng ta đành phải kiên nhẫn chờ đợi. (Diệp Tử - Tập 4)',
    ],
  },
  {
    id: 80,
    book: '',
    author: 'Nấc thang cuộc đời',
    content: [
      'Họ biết hay không không quan trọng. Tóm lại tôi cứu họ là vì khâm phục tình anh em của họ. Năm trăm đồng đại dương cứu sống hai mạng người, xứng đáng mà. Có những chuyện không thể nói ra miệng được, có những chuyện đáng nói cũng không nên nói ra, nói tóm lại là chuyện mình làm cũng không cần ai biết (Vinh Hạo Đông - Tập 4)',
    ],
  },
  {
    id: 81,
    book: '',
    author: 'Crash Landing on You',
    content: [
      'Anh nghĩ sai rồi, cho dù có phải chết vẫn có người khóc thương cho anh...Biết người đó là em khiến anh đau lòng nhưng mãn nguyện (Tập 15)',
      'Vì anh biết rồi, nên em đừng khóc',
    ],
  },
  {
    id: 82,
    book: '',
    author: 'Crash Landing on You',
    content: ['Vì anh biết rồi, nên em đừng khóc'],
  },
  {
    id: 82,
    book: '',
    author: 'So Young',
    content: [
      'Cuộc đời anh là toà nhà chỉ được xây một lần.  Anh buộc phải để nó chính xác tuyệt đối, không được sai một centimet nào cả. (Trần Hiếu Chính)',
    ],
  },
  {
    id: 83,
    book: '',
    author: 'Cẩm y chi hạ',
    content: [
      'Kim Hạ chính là điểm yếu của ta, cũng là khôi giáp của ta. Ta có thể vì nàng ấy mà cúi đầu nhưng cũng có thể vì nàng ấy ta lại càng có thêm được sức mạnh để tranh đấu (Lục Dịch - Tập 52)',
    ],
  },
  {
    id: 84,
    book: '',
    author: 'Cha tôi là người quản rừng',
    content: [
      'Không có bậc cha mẹ nào là hoàn hảo đâu, đôi khi tôi cũng phạm phải sai lầm. Nhiều khi tôi để cơn giận lấn áp chính bản thân, để thằng bé khóc sưng cả hai mắt. Trong những lúc tôi mất phương hướng, tôi thường ôm lấy thằng bé, nói rằng tôi xin lỗi. Chắc nó biết tôi quan tâm đến nó lắm. Đó là cách bố mẹ và con cái cùng trưởng thành đấy. Tình thân là thế đấy.',
    ],
  },
  {
    id: 85,
    book: '',
    author: 'Cha tôi là người quản rừng',
    content: [
      'Sự bình phục của nhóc mới là điều quan trọng đối với ta. Ta có thể làm để kiếm thêm tiền, nhưng không gì có thể thay thế được nhóc đâu, Somali',
    ],
  },
  {
    id: 86,
    book: '',
    author: 'Cha tôi là người quản rừng',
    content: ['Những lời  nói dối vô tâm làm cho mọi ký ức hạnh phúc đều tan vỡ (Golem - Tập 4)'],
  },
  {
    id: 85,
    book: '',
    author: 'Assassins Pride',
    content: ['Kẻ thù của ngươi cầm vũ khí không có nghĩa là sử dụng nó (Melida Angel - Tập 2)'],
  },
  {
    id: 87,
    book: '',
    author: 'Assassins Pride',
    content: ['Kẻ thù của ngươi cầm vũ khí không có nghĩa là sử dụng nó (Melida Angel - Tập 2)'],
  },
]

export default quotes
