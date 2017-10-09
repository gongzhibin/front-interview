// 471 Encode String with Shortest Length

package java_practice;

import java.util.*;

public class Main {

    static Map<Integer, Map<Integer, String>> map = new HashMap<Integer, Map<Integer, String>>();
    public static void main(String[] arg){
    	Scanner sc = new Scanner(System.in);
    	String s = sc.nextLine();
        String res = minimize(s, 0, s.length()-1);
        System.out.println(res.length());
    }

    public static String minimize(String s, int i, int j){
        if(map.containsKey(i) && map.get(i).containsKey(j)) return map.get(i).get(j);
        // first see if it can be repeated several times
        int minLen = j - i + 1;
        String res = s.substring(i, j+1);
        for(int l = 1; l <= (j-i+1)/2; l++) {
            if( (j-i+1) % l != 0) continue;

            boolean ok = true;
            for(int k = 0; k < (j - i + 1); k++) {
                if(s.charAt(i+k) != s.charAt(i + k%l)) {
                    ok = false;
                    break;
                }
            }
            if(ok) {
                String assemble = (j-i+1)/l + "[" + minimize(s, i, i+l-1) + "]";
                if(assemble.length() < minLen) {
                    minLen = assemble.length();
                    res = assemble;
                }
            }
        }

        for(int k = i; k < j; k++) {
            String mix = minimize(s, i, k) + minimize(s, k+1, j);
            if(mix.length() < minLen) {
                minLen = mix.length();
                res = mix;
            }
        }

        if(!map.containsKey(i)) map.put(i, new HashMap<Integer, String>());
        map.get(i).put(j, res);
        return res;
    }

}