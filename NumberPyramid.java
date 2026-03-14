public class NumberPyramid {
    public static void main(String[] args) {
        int n = 5;

        for (int row = 1; row <= n; row++) {
            for (int space = 0; space < n - row; space++) {
                System.out.print(" ");
            }

            for (int i = 1; i <= row; i++) {
                System.out.print(i);
            }

            for (int i = row - 1; i >= 1; i--) {
                System.out.print(i);
            }

            System.out.println();
        }
    }
}
