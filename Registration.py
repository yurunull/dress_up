clothes = []

#服の登録
def add():
    name = input("服の種類: ")
    color = input("色: ")
    season = input("着る季節: ")

    clothes.append({
        "name": name,
        "color": color,
        "season": season
    })

    print("登録されました！！")

#コーデの提案
def suggestion():
    print("出かける目的を教えてください（例：学校）")
    purpose = input("目的: ")
    print("今の季節は何ですか？")
    now-season = input("季節: ")

    print(purpose,"と",now-season,"に合ったコーデを考えます")
    #コーデを考える
    
def main():
    print("したいことを選んでください")
    print("1: 服の登録　2: コーデの提案　3: なんでもない")
    choise = input()

    while Ture:
       if choise == 1:
          add()
       elif choise == 2:
          suggestion()
       elif choise == 3:
          print("終了します")
          print("またね！")
          break
       else:
          print("その選択肢はありません")

    if _name_ == "_main_":
         main()