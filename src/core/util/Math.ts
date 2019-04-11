export function gcd(a: number, b: number): number {
    return (b == 0) ? Math.abs(a) : gcd(b, a % b);
}
