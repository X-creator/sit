// Декор
const tab = "\t";
const newLine = "\n";

// Функция задержки
const delay = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

// Интерфейс стратегии угадывания
interface GuessingStrategy {
  guess(lower: number, upper: number): number;
}

// Стратегия бинарного поиска
class BinarySearchStrategy implements GuessingStrategy {
  guess(lower: number, upper: number): number {
    return Math.floor((lower + upper) / 2);
  }
}

// Абстрактный класс игрока
abstract class Player {
  constructor(readonly name: string) {}

  abstract makeMove(lower: number, upper: number): number;
}

// Компьютер, который загадывает число
class SecretKeeper extends Player {
  makeMove(lower: number, upper: number) {
    return Math.floor(Math.random() * (upper - lower)) + lower;
  }
}

// Компьютер, который угадывает число
class Guesser extends Player {
  constructor(
    readonly name: string,
    readonly strategy: GuessingStrategy,
  ) {
    super(name);
  }

  makeMove(lower: number, upper: number) {
    return this.strategy.guess(lower, upper);
  }
}

// Класс игры
class NumberGuessingGame {
  private secretKeeper!: SecretKeeper;
  private guesser!: Guesser;
  private lowerBound!: number;
  private upperBound!: number;

  init(secretKeeper: SecretKeeper, guesser: Guesser, lowerBound: number, upperBound: number) {
    this.secretKeeper = secretKeeper;
    this.guesser = guesser;
    this.lowerBound = lowerBound;
    this.upperBound = upperBound;
  }

  checkIsInit() {
    return (
      this.secretKeeper instanceof SecretKeeper &&
      this.guesser instanceof Guesser &&
      Number.isInteger(this.lowerBound) &&
      Number.isInteger(this.upperBound)
    );
  }

  async showMessage(message: string) {
    await delay(1000);
    console.log(message);
  }

  async play() {
    if (!this.checkIsInit()) return this.showMessage("Игра не инициализирована.");

    let attempts = 0;
    let guessed = false;
    let currentLower = this.lowerBound;
    let currentUpper = this.upperBound;
    const secretNumber = this.secretKeeper.makeMove(this.lowerBound, this.upperBound);

    await this.showMessage(`${this.secretKeeper.name} загадал число: ${secretNumber}.${newLine}`);

    while (!guessed) {
      attempts++;
      const guess = this.guesser.makeMove(currentLower, currentUpper);
      await this.showMessage(
        `${tab}Попытка ${attempts}, диапазон чисел [${currentLower}, ${currentUpper}].`,
      );
      await this.showMessage(`${this.guesser.name}: Пробую число ${guess}.`);

      if (guess === secretNumber) {
        await this.showMessage(`${this.secretKeeper.name}: Угадал!${newLine}`);
        guessed = true;
      } else if (guess < secretNumber) {
        await this.showMessage(`${this.secretKeeper.name}: Больше.${newLine}`);
        currentLower = guess + 1;
      } else {
        await this.showMessage(`${this.secretKeeper.name}: Меньше.${newLine}`);
        currentUpper = guess - 1;
      }
    }
  }
}

// Создаем игроков и запускаем игру
const secretKeeper = new SecretKeeper("Компьютер 1");
const guesser = new Guesser("Компьютер 2", new BinarySearchStrategy());
const game = new NumberGuessingGame();

game.init(secretKeeper, guesser, 1, 100);
void game.play();
